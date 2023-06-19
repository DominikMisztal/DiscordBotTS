// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Command } from '../../interfaces/Command';

export const purge: Command  = {
	data: new SlashCommandBuilder()
		.setName('purge')
		.setDescription('Deletes messages in bulk')
		.addStringOption((option) =>
			option
				.setName("amount")
				.setDescription("How many messages to delete")
				.setRequired(true)),
	run: async(interaction: CommandInteraction) => {
		const amount = +interaction.options.getString("amount", true);
		let replyString : string;
		if(amount > 100){
			replyString = "Too many messages, choose less than 100";
		} else if(amount <= 1){
			replyString = "Too few messages, choose more than 1";
		} else{
			const messages = (await interaction.channel?.messages.fetch({ limit: amount }).filter(m => !m.pinned));
			try {
				await interaction.channel?.bulkDelete(messages);
				replyString = "Deleted messages";
			} catch (error) {
				replyString = "Issue when clearing messages.";
			}
			
		}
		
		interaction.reply(replyString);
	},
};