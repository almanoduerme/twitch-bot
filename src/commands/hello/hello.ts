const say = require("say");

export function handleHelloCommand(channel: string, tags: any, client: any) {
  client.say(channel, `Hello ${tags.username}!`);
  say.speak(`Hello ${tags.username}!`);
}
