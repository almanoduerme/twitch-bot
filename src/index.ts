// Libraries
const tmi = require("tmi.js");
const say = require("say");

// Local imports
const { handleGoodbyeCommand, handleHelloCommand, handleUnknownCommand } = require("./commands");
const { twitchBotOptions } = require("./config/twitchBotOptions");

// Create a client with our options
const client = new tmi.client(twitchBotOptions);

// Register our event handlers
const commandHandlers = new Map([
  ["hello", handleHelloCommand],
  ["goodbye", handleGoodbyeCommand],
]);

client.on("message", (channel: string, tags: any, message: string, self: any) => {
  if (self) return; // Ignore messages from the bot itself
  if (!message.startsWith("!")) return; // Ignore messages that don't start with "!"

  // Parse the message into command and arguments
  const [command, ...args] = message.slice(1).split(" ");

  // Find the appropriate handler for the command or use handleUnknownCommand
  const handler = commandHandlers.get(command.toLowerCase()) || handleUnknownCommand;

  // Call the handler function with appropriate arguments
  handler(channel, tags, client, args);
});

client.on("connected", (addr: string, port: number) => {
  console.log(`* Connected to ${addr}:${port}`);
});

client.connect();
