// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Command } from '../../interfaces/Command';
import { createConnection } from 'mysql';
import { randomInt } from 'crypto';

export const question: Command  = {
	data: new SlashCommandBuilder()
		.setName('question')
		.setDescription('Provides a quiz question'),
	run: async(interaction: CommandInteraction) => {
		const database = createConnection({
            host:'quiz',
            user: 'helpie',
            password: 'helpie123',
            database: 'quiz',
        });
		const questionId = randomInt(5);
		const sqlQuery = "Select * From easy_questions where ID = " + questionId;
        await database.connect(function(err) {
			if (err) throw err;
			});
		let question : string;
		let correctAnswer : string;
		let answers : Array<string> = [];
		await database.query(sqlQuery, (err, results, fields) =>  {
			question = results[0].question;
			correctAnswer = results[0].correct_answer;
			answers.push(results[0].correct_answer);
			answers.push(results[0].incorrect_answer_1);
			answers.push(results[0].incorrect_answer_2);
			answers.push(results[0].incorrect_answer_3);
			console.log(results[0]);
			console.log(correctAnswer);
			answers = shuffle(answers);
			const replyString = question + "\nA: " +
						answers[0] + "\nB: " +
						answers[1] + "\nC: " +
						answers[2] + "\nD: " +
						answers[3] + "\nCorrect: " +
						"||" + correctAnswer + "||";
			interaction.reply(replyString);
		})
        
	},
};

function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}