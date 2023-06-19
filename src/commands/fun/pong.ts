import { SlashCommandBuilder } from 'discord.js';
import { Command } from '../../interfaces/Command';

export const pong: Command  = {
    data: new SlashCommandBuilder()
    .setName('pong')
    .setDescription('Replies with Ping!'),
    run: async(interaction) =>{
		await interaction.reply('Ping!');
	},
}