export function handleUnknownCommand(channel: string, tags: any, client: any) {
  client.say(channel, `I don't know that command!`);
}