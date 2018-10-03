# GHSpeaker
Let your Google Home speak for routine and one-time message

---- English ----

# Requirements

- Linux PC (using cron)
- Google Home
- Google Spread Sheet

# How to Use

Create new Google Spread Sheet. And setup column names in first row. After second row, you can configure when, what message you want Google Home to speak.
*IMPORTANT: If you dismiss the column names like any typo, this program may not work. Please set the names carefully.

# How to setup Spread Sheet

Column A: [day] Set "Day" when Google Home runs
    --Day: Mon, Tue, Wed, Thu, Fri, Sat, Sun
    --Week/Holiday: Week (Mon-Fri), Holi (Sat & Sun)
Column B: [h] Set "Hour" when Google Home runs
Column C: [m] Set "Minutes" when Google Home runs
Column D: [message] Set "Message" which Google Home speaks


---- 日本語 ----

# 必要なもの

- Linux PC (cron)
- Google Home
- Google Spread Sheet

# 使い方

Google Spread Sheetで新しいスプレッド・シートを作成する 1行目に見出しをつける、この見出しの名前を間違えると 正しく動作しないため注意が必要 あとは各見出しに合った値を設定しておくことで、 設定した曜日、時刻にメッセージをGoogle Homeが読み上げます

# Spread Sheetの見出しと設定方法

A列: [day] 起動の "曜日" または "平日/休日" を設定
    曜日: Mon, Tue, Wed, Thu, Fri, Sat, Sun
    平日／休日：Week(月～金), Holi(土日)
B列: [h] 起動時刻の "時" を設定
C列: [m] 起動時刻の "分" を設定
D列: [message] Google Homeで話すメッセージを設定
E列以降は使用しないため、任意の文字列を設定

# 実装の参考URL

http://blog.o-live.xyz/notify-googlehome-with-raspberrypi/
