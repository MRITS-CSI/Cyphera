import { respQuestions } from '../Interface';
import { levenshtein } from './levenshtein';

export const genScore = (questions: respQuestions) => {
	let points = 0;
	let maxpoints = 0;
	for (let i = 0; i < questions.cipher.length; i++) {
		if (i <= 1) {
			maxpoints += questions.fibonacci[i].answer.length;
		}
		maxpoints += questions.cipher[i].answer.length;
	}

	for (let i = 0; i < questions.cipher.length; i++) {
		if (i <= 1) {
			let fiboText = (
				document.getElementById(`b${i}`) as HTMLInputElement
			).value.toLowerCase();
			let fiboDist = levenshtein(
				questions.fibonacci[i].answer.toLowerCase(),
				fiboText
			) as number;
			points += questions.fibonacci[i].answer.length - fiboDist;
		}
		let cipherText = (
			document.getElementById(`a${i}`) as HTMLInputElement
		).value.toLowerCase();
		let cipherDist = levenshtein(
			questions.cipher[i].answer.toLowerCase(),
			cipherText
		) as number;
		points += questions.cipher[i].answer.length - cipherDist;
	}
	let percentage = (points / maxpoints) * 100;
	return percentage.toFixed(2);
};
