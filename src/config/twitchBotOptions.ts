import { TwitchBotTypes } from "../types/TwitchBotTypes";

require("dotenv").config();

export const twitchBotOptions: TwitchBotTypes = {
  identity: {
    username: process.env.TWITCH_USERNAME || undefined,
    password: process.env.TWITCH_OAUTH || undefined,
  },
  channels: [process.env.TWITCH_CHANNEL || ""],
};
