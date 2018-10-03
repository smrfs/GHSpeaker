# GHSpeaker

(English) Let your Google Home speak for routine and one-time message<br>
(日本語) Google Homeに定期的に、またはアドホックにメッセージを喋って貰いましょう

# Requirements (必要なもの)

- Linux PC (using cron)
- Google Home
- Google Spread Sheet
- IFTTT (Optional, but useful)

# How to Use (使い方)

(English)<br>
Create new Google Spread Sheet. And setup column names in first row. After second row, you can configure when, what message you want Google Home to speak.
*IMPORTANT: If you dismiss the column names like any typo, this program may not work. Please set the names carefully.

(日本語)<br>
Google Spread Sheetで新しいスプレッド・シートを作成し、1行目に見出しをつけます。あとは各見出しに合った値を設定しておくことで、 設定した曜日、時刻にメッセージをGoogle Homeが読み上げます。
*注意: この見出しの名前を間違えると 正しく動作しないため注意が必要です

# How to setup Spread Sheet (スプレッド・シートの見出しと設定方法)

(English)<br>
Column A: [day] Set "Day" when Google Home runs<br>
    --Day: Mon, Tue, Wed, Thu, Fri, Sat, Sun<br>
    --Week/Holiday: Week (Mon-Fri), Holi (Sat & Sun)<br>
Column B: [h] Set "Hour" when Google Home runs<br>
Column C: [m] Set "Minutes" when Google Home runs<br>
Column D: [message] Set "Message" which Google Home speaks<br>

(日本語)<br>
A列: [day] 起動の "曜日" または "平日/休日" を設定<br>
    曜日: Mon, Tue, Wed, Thu, Fri, Sat, Sun<br>
    平日／休日：Week(月～金), Holi(土日)<br>
B列: [h] 起動時刻の "時" を設定<br>
C列: [m] 起動時刻の "分" を設定<br>
D列: [message] Google Homeで話すメッセージを設定<br>
E列以降は使用しないため、任意の文字列を設定

# Reference URL (* Japanese Only)

http://blog.o-live.xyz/notify-googlehome-with-raspberrypi/
