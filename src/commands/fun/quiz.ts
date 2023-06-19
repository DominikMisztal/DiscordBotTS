// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Command } from '../../interfaces/Command';

export const quiz: Command  = {
	data: new SlashCommandBuilder()
		.setName('purge')
		.setDescription('Deletes messages in bulk')
		.addStringOption((option) =>
			option
				.setName("difficulty")
				.setDescription("How difficult should be the question")
				.setRequired(true)),
	run: async(interaction: CommandInteraction) => {
		const difficulty = +interaction.options.getString("amount", true);
		let replyString : string;
		
		interaction.reply(replyString);
	},
};