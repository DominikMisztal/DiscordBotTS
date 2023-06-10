import { Client, GatewayIntentBits } from "discord.js";
import { token } from "./config.json";
import { onInteraction } from "./events/onInteraction";
import { onReady } from "./events/onReady";
import { IntentOptions } from "./configs/IntentOptions";


console.log("Bot is starting...");

const client = new Client({intents: IntentOptions});

client.on("ready", async () => await onReady(client));
client.on(
    "interactionCreate",
    async (interaction) => await onInteraction(interaction)
  );

console.log("Connected to server");
client.login(token);


console.log(client);