# LMGT bot (Telegram)

This bot will provide inline use of the [LMGT](https://letmegooglethat.com) service on Telegram. 

This is a fork of [trgwii](https://github.com/trgwii/LMGTFY-Bot) adjusted to use `letmegooglethat.com` instead of `lmgtfy.com` plus adding `tinyurl.com` as the main shortener (bc its free and works).

## Installation:

You'll need [NodeJS](https://nodejs.org/) to run this bot.

After you've installed that, open a terminal and type (or copy) the following:

	git clone https://github.com/steadfasterX/LMGTFY-Bot.git
	cd LMGTFY-Bot
	npm install
	cp example.config.json config.json


Now you need to speak to [BotFather](https://t.me/BotFather) within the Telegram application.

You'll need to create a bot if you didn't already, and get the token, then enable inline mode (use /setinline).

Next open config.json in your favorite text editor, and replace `"BOT TOKEN HERE"` with the token you got (remember to surround it in "quotes").

Now you just have to run the following to start the bot:

	node .
