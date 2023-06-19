// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Command } from '../../interfaces/Command';
import { createConnection } from 'mysql';
import { randomInt } from 'crypto';

export const question: Command  = {
	data: new SlashCommandBuilder()
		.setName('question')
		.setDescription('Provides a quiz question')
		.addStringOption((option) =>
			option
				.setName("difficulty")
				.setDescription("How difficult should be the question")
				.setRequired(true)),
	run: async(interaction: CommandInteraction) => {
		const difficulty = +interaction.options.getString("amount", true);
		let replyString : string;
		const database = createConnection({
            host:'localhost:3306',
            user: 'helpie',
            password: 'helpie123',
            database: 'quiz',
        });
		const question : number;
		question = randomInt(5);
		const sqlQuery = "Select * From easy_questions where ID = " + question;
        database.connect();
		const queryResult : string;
        get_info(database, sqlQuery, function(result){
			queryResult = result;
		});
		interaction.reply(queryResult);
	},
};

function get_info(database, sqlQuery, callback){
      
	database.query(sqlQuery, function(err, results){
			if (err){ 
			throw err;
			}
			console.log(results[0].objid);  

			return callback(results[0].objid);
  })
}