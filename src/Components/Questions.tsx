import React, { ChangeEvent } from 'react';
import { fibEncrypt } from '../Utils/fibencrypt';
import { levenshtein } from '../Utils/levenshtein';
import { clamp, getRGBValues, inverseLerp, Lerp, setRGBValues } from '../Utils/stringutils';
let sentences = [
	'Missile launch will occur exactly at noon on the next saturday.',
	'Rations have been shipped to the front lines.',
	'Several incoming planes detected into the western front.',
	'Eastern front cryptographic integrity compromised.',
	'It appears that our enemies have managed to decipher our communications.',
	'New encryption system will be used from midnight. Details will be sent via encrypted post.',
];

const Questions = () => {
	const defaultColor = getRGBValues(`rgb(${0xEE.toString(10)}, ${0xEE.toString(10)}, ${0xEE.toString(10)})`)
	const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		let index = parseInt(e.target.id.replace('a', ''));
		let dist = levenshtein(e.target.value, sentences[index]) as number;
		// let x = document.getElementById(`a${index}`);
		// if (!x) return;
		// let cval = getRGBValues(x.style.borderColor);
		// let ouff = inverseLerp(0, parseInt(sentences[index]), dist);
		// let defr = typeof(defaultColor?.r) == 'undefined' ? 0 : defaultColor?.r;
		// let louff = Lerp(defr, 255, ouff);
		// let vals = setRGBValues({'r': clamp(0, 255, defr - louff), 'g': clamp(0, 255, defr + louff), b: clamp(0, 255, defr - louff)})
		// document.getElementById(`a${index}`)!.style.borderColor = setRGBValues(vals);
		// console.log(`changed to ${vals}`);
		// console.log(cval);
		

		if (dist < sentences[index].length / 2) {
			document.getElementById(`a${index}`)?.classList.remove('wrong');
			document.getElementById(`a${index}`)?.classList.add('correct');
			//	console.log(document.getElementById(`a${index}`)?.classList);
		} else {
			document.getElementById(`a${index}`)?.classList.remove('correct');

			document.getElementById(`a${index}`)?.classList.add('wrong');
		}
	};
	let questions = sentences.map((sentence, i) => {
		return (
			<div className="row" id={`row${i}`}>
				<div className="cipher" id={`q${i}`}>
					{fibEncrypt(sentence)}
				</div>
				<input
					type="text"
					name=""
					className="plaintext"
					id={`a${i}`}
					placeholder="Enter deciphered message"
					onChange={inputChangeHandler}
				/>
			</div>
		);
	});
	return (
		<div className="messagecontainer" id="qcont">
			{questions}
		</div>
	);
};

export default Questions;
