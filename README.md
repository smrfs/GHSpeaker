# GHSpeaker
Let your Google Home speak for routine and one-time message

# Requirements (必要なもの)

- Linux PC (using cron)
- Google Home
- Google Spread Sheet

# How to Use (使い方)

(English)<br>
Create new Google Spread Sheet. And setup column names in first row. After second row, you can configure when, what message you want Google Home to speak.
*IMPORTANT: If you dismiss the column names like any typo, this program may not work. Please set the names carefully.

(日本語)
Google Spread Sheetで新しいスプレッド・シートを作成し、1行目に見出しをつけます。あとは各見出しに合った値を設定しておくことで、 設定した曜日、時刻にメッセージをGoogle Homeが読み上げます。
*注意: この見出しの名前を間違えると 正しく動作しないため注意が必要です

# How to setup Spread Sheet (スプレッド・シートの見出しと設定方法)

(English)
Column A: [day] Set "Day" when Google Home runs\n
    --Day: Mon, Tue, Wed, Thu, Fri, Sat, Sun\n
    --Week/Holiday: Week (Mon-Fri), Holi (Sat & Sun)\n
Column B: [h] Set "Hour" when Google Home runs\n
Column C: [m] Set "Minutes" when Google Home runs\n
Column D: [message] Set "Message" which Google Home speaks\n

(日本語)
A列: [day] 起動の "曜日" または "平日/休日" を設定\n
    曜日: Mon, Tue, Wed, Thu, Fri, Sat, Sun\n
    平日／休日：Week(月～金), Holi(土日)\n
B列: [h] 起動時刻の "時" を設定\n
C列: [m] 起動時刻の "分" を設定\n
D列: [message] Google Homeで話すメッセージを設定\n
E列以降は使用しないため、任意の文字列を設定\n

# Reference URL (* Japanese Only)

http://blog.o-live.xyz/notify-googlehome-with-raspberrypi/
