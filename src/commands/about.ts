import client from "../connection";
import phrasesRaw = require("../helpers/phrases");

client.on("chat", (channel: string, userstate: any, message: string, self: string) => {
  // Do not respond if the message is from the bot
  if (self) { return; }

  // Check if the broadcaster writes the command '!pictionary'
  if (message === "!about") {
    client.say(channel, `Bot made by @voidMercxry, \
      I'm Open-Source if you want to see my code check my Github @mercxry`);
  }
});

export default client;
