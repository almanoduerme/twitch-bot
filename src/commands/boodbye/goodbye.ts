const say = require("say");

export function handleGoodbyeCommand(channel: string, tags: any, client: any) {
  client.say(channel, `Goodbye ${tags.username}!`);
  say.speak(`Goodbye ${tags.username}!`);
}