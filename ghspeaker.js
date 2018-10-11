'use restrict'

const async = require('async');
const googlehome = require('google-home-notifier');
const spreadsheet = require('google-spreadsheet');
const config = require("./config.json");
const authcode = require(config.credential_path);

// Map for Day and Week-day from Data.getDay method
const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const wkday = ['Holi', 'Week', 'Week', 'Week', 'Week', 'Week', 'Holi'];


async.waterfall([

  // Get Google Spread Sheet
  function(callback) {
    var spsheet = new spreadsheet(config.sheet_id);
    spsheet.useServiceAccountAuth(authcode, function(err) {
        spsheet.getInfo(function(err, info) {
            callback(err, info.worksheets[0]);
        });
    });
  },

  // Get Message Text
  function(sheet, callback) {
      // Query Sheet Config
      var now = new Date();
      sheet.getRows({
          query: '((day=' + day[now.getDay()] + ' or day=' + wkday[now.getDay()] + ' or day=All) and h=' + now.getHours() + ' and m=' + now.getMinutes() + ') or day=Tmp',
          limit: 1
      }, function(err, rows) {
          if (rows.length >= 1 && rows[0].day=='Tmp') {
              // Delete if the Message is for One-Time
              callback(err, rows[0].message);
              rows[0].del();
          } else if (rows.length >= 1 && rows[0].day!='Tmp'){
              callback(err, rows[0].message);
	   } else {
              callback(err, null);
          }
      });
  },

  // Nofity Google Home
  function(message, callback) {
    if (message !== null) {
      googlehome.device(config.device_name, config.language); 
      googlehome.ip(config.ip_address);
      googlehome.accent(config.language);
      googlehome.notify(message, function(res) {
        console.log(res);
      });
    }
  },
  
  function(err) {
    if (err) console.log(err);
  }
]);
