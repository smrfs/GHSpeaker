# GHSpeaker

Let your Google Home speak for routine and one-time message<br>
(日本語) Google Homeに定期的に、またはアドホックにメッセージを喋って貰いましょう

# Requirements (必要なもの)

- Linux PC (using cron)
- Google Home
- Google Spread Sheet
- IFTTT (Optional, but useful)

# How to Use (使い方)

1. Create your service account in Google Devloper Console to call Google Spread Sheet API, and save the credential json file in your Linux PC. Detail info is here: https://www.npmjs.com/package/google-spreadsheet#service-account-recommended-method
2. Create new Google Spread Sheet, and setup column names in first row. After second row, you can configure when, what message you want Google Home to speak.<br>
*IMPORTANT: If you dismiss the column names like any typo, this program may not work. Please set the names carefully.<br>
*SAMPLE: https://github.com/smrfs/GHSpeaker/blob/master/sample.csv
3. Share the sheet with your service account created first step.
4. Copy the Spread Sheet ID from URL in your browser.
5. Setup Node.js Run-time in your Linux PC.
6. Copy GHSpeaker from github into your Linux and install all node_modules: https://github.com/smrfs/GHSpeaker
7. Check path of service account credential json, sheet ID, Google Home device name and its ip address, then setup config.json.
8. Setup cron like this: */1 * * * * node /PATH_FOR_GHSPEAKER/ghspeaker.js
9. Optionally, you can send one-time message to the Spread Sheet using IFTTT or any other integration services.

(日本語)
1. Google Developer ConsoleでGoogle Spread SheetのAPI実行用のサービス・アカウントを作成し、クリデンシャル用のjsonファイルを取得、Linux環境へ保存しておきます
2. Google Spread Sheetで新しいスプレッド・シートを作成し、1行目に見出しをつけます<br>
あとは各見出しに合った値を設定しておくことで、 設定した曜日、時刻にメッセージをGoogle Homeが読み上げます<br>
*注意: この見出しの名前を間違えると 正しく動作しないため注意が必要です
*サンプル: https://github.com/smrfs/GHSpeaker/blob/master/sample.csv
3. 作成したSheetを作成したサービス・アカウントと共有します
4. ブラウザのURLからSpread SheetのIDを控えておきます
5. Linux環境でNode.jsの実行環境を整えます
6. GithubからGHSpeakerをLinux環境へコピーし、node_modulesをインストールします: https://github.com/smrfs/GHSpeaker
7. サービス・アカウントのクリデンシャルjsonへのパス、Sheet ID、Google Homeのデバイス名とIPアドレスを確認し、config.jsonを編集します
8. 次のようにcronを設定します: */1 * * * * node /PATH_FOR_GHSPEAKER/ghspeaker.js
9. オプションとして、IFTTTなどを使うことでSpread Sheetにアドホックなメッセージを送って喋らせることも可能です

# How to setup Spread Sheet (シートの見出しと設定方法)

Column A: [day] Set "Day" when Google Home runs<br>

- Day: Mon, Tue, Wed, Thu, Fri, Sat, Sun
- Week/Holiday: Week (Mon-Fri), Holi (Sat & Sun)
- One-Time: Tmp

Column B: [h] Set "Hour" when Google Home runs<br>
Column C: [m] Set "Minutes" when Google Home runs<br>
Column D: [message] Set "Message" which Google Home speaks<br>

(日本語)<br>
A列: [day] 起動の "曜日" または "平日/休日" を設定<br>

- 曜日: Mon, Tue, Wed, Thu, Fri, Sat, Sun
- 平日／休日：Week(月～金), Holi(土日)
- アドホック: Tmp

B列: [h] 起動時刻の "時" を設定<br>
C列: [m] 起動時刻の "分" を設定<br>
D列: [message] Google Homeで話すメッセージを設定<br>
E列以降は使用しないため、任意の文字列を設定

# Reference URL (* Japanese Only)

http://blog.o-live.xyz/notify-googlehome-with-raspberrypi/