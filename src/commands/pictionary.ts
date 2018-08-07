import client from "../connection";
import phrasesRaw = require("../helpers/phrases");
import { setOwner } from "../helpers/store";

const phrases: any = phrasesRaw.default;

client.on("chat", (channel: string, userstate: any, message: string, self: string) => {
  // Do not respond if the message is from the bot
  if (self) { return; }

  // Alias for userstate.username
  const username: string = userstate.username;

  // Check if the broadcaster writes the command '!pictionary'
  if (message === "!pictionary" && userstate.badges.broadcaster === "1") {
    // Send a message to the channel and logs to the console that the broadcaster is starting a pictionary
    console.log(`@${username} is starting a pictionary!`);
    client.say(channel, `@${username} is starting a pictionary! PogChamp`);

    // Greet the owner and ask him to send the first word to guess
    client.whisper(username, phrases.whisper.greetings);
    client.whisper(username, phrases.whisper.startChat);

    // Set the owner to the broadcaster
    setOwner(username);
  }
});

export default client;
