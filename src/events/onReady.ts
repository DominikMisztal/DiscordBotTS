import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { Client } from "discord.js";
import { CommandList } from "../commands/_CommandsList";
import { guildId , clientId, token} from "../config.json";

export const onReady = async (BOT: Client) => {
  const rest = new REST({ version: "9" }).setToken(
    token as string
  );

  const commandData = CommandList.map((command) => command.data.toJSON());

  await rest.put(
    Routes.applicationGuildCommands(
      clientId,
      guildId as string
    ),
    { body: commandData }
  );

  console.log("Discord ready!");
};