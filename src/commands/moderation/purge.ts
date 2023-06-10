//@ts-nocheck
import { CommandInteraction, Options, SlashCommandBuilder } from 'discord.js';
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
		var amount = +interaction.options.getString("amount", true);
		var replyString : String;
		if(amount > 100){
			// interaction.reply("Too many messages, choose less than 100");	
			replyString = "Too many messages, choose less than 100";
		} else if(amount <= 1){
			// interaction.reply("Too few messages, choose more than 1");	
			replyString = "Too few messages, choose more than 1";
		} else{
			interaction.channel.bulkDelete(amount);
		}
		replyString = "Deleted messages";
		interaction.reply(replyString);
	},
};