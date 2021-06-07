const { GoogleSpreadsheet } = require('google-spreadsheet');
const googleTTS = require('google-tts-api');
const Client = require('castv2-client').Client;
const DefaultMediaReceiver = require('castv2-client').DefaultMediaReceiver;

// Get environment specific files
const config = require("./config.json");
const authcode = require(config.credential_path);

// Map for Day and Week-day from Data.getDay method
const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const wkday = ['Holi', 'Week', 'Week', 'Week', 'Week', 'Week', 'Holi'];

// Fetch Message from Google Spread Sheet
async function main() {
    const spsheet = new GoogleSpreadsheet(config.sheet_id);
    await spsheet.useServiceAccountAuth(authcode);
    await spsheet.loadInfo();
    const sheet = await spsheet.sheetsByIndex[0];
    const now = new Date();
    const rows = await sheet.getRows();
    let idx = rows.findIndex(row => ((row.day == day[now.getDay()] || row.day == wkday[now.getDay()] || row.day == 'All') && row.h == now.getHours() && row.m == now.getMinutes()) || row.day == 'Tmp');

    if (idx >= 0 && rows[idx].day=='Tmp') {
        // Delete if the Message is for One-Time
        speech(config.ip_address, config.language, rows[idx].message);
        rows[idx].day = '';
        rows[idx].h = '';
        rows[idx].m = '';
        rows[idx].message = '';
        rows[idx].note = '';
        rows[idx].save();
    } else if (idx >= 0 && rows[idx].day!='Tmp'){
        speech(config.ip_address, config.language, rows[idx].message);
    }
}

function speech(host, lang, text) {
    const content = googleTTS.getAudioUrl(text, {
        lang: lang,
        slow: false,
    });
    if (content == '') return;

    const client = new Client();
    client.connect(host, function () {
        client.launch(DefaultMediaReceiver, function (err, player) {
            if (err) {
                console.log(err);
                return;
            }

            player.on('status', function (status) {
                console.log(`status broadcast playerState=${status.playerState}`);
            });

            const media = {
                contentId: content,
                contentType: 'audio/mp3',
                streamType: 'BUFFERED'
            };
            player.load(media, { autoplay: true }, function (err, status) {
                client.close();
            });
        });
    });
    client.on('error', function (err) {
        console.log(`Error: ${err.message}`);
        client.close();
    });
};

main();