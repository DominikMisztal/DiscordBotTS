import { SlashCommandBuilder } from 'discord.js';
import { Command } from '../../interfaces/Command';

export const user: Command  = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.'),
	run: async (interaction) =>{
		await interaction.reply(`This command was run by ${interaction.user.username}.`);
	},
};