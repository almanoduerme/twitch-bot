### Twitch Bot

This is a Twitch Bot that I made for my Twitch channel. It is written in TypeScript and uses [tmi.js](https://tmijs.com/) to connect to Twitch's IRC servers and [say](https://www.npmjs.com/package/say) to speak to the user.

## Example Commands

```
/hello - Says hello to the user
/goodbye - Says goodbye to the user
```

## Setup

1. Clone the repository
2. Run `pnpm install` to install dependencies
3. Get your Twitch OAuth token [here](https://dev.twitch.tv/console)
4. Create a `.env` file in the root directory and add the following:

```
TWITCH_USERNAME=your_twitch_username
TWITCH_OAUTH=your_twitch_oauth_token
TWITCH_CHANNEL=your_twitch_channel
```
5. Run `pnpm start` to start the bot