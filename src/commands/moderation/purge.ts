//@ts-nocheck
import { CommandInteraction, Options, SlashCommandBuilder } from 'discord.js';
import { Command } from '../../interfaces/Command';
import { clearMessages } from './purge_help';

export const purge: Command  = {
	data: new SlashCommandBuilder()
		.setName('purge')
		.setDescription('Deletes messages in bulk'),
	run: async(interaction: CommandInteraction) => {
		console.log(interaction.channel?.id);
		interaction.channel.bulkDelete(10);
		interaction.reply("Cleared messages!");
	},
};