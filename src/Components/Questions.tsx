import React, { ChangeEvent, useEffect } from 'react';
import { connect } from 'react-redux';

import '../CSS/game.css';

import { questionData } from '../Actions';
import { mapStateToPropsInt, respQuestions } from '../Interface';

import { levenshtein } from '../Utils/levenshtein';
// import { clamp, getRGBValues, inverseLerp, Lerp, setRGBValues } from '../Utils/stringutils';
// let sentences = [
// 	'Missile launch will occur exactly at noon on the next saturday.',
// 	'Rations have been shipped to the front lines.',
// 	'Several incoming planes detected into the western front.',
// 	'Eastern front cryptographic integrity compromised.',
// 	'It appears that our enemies have managed to decipher our communications.',
// 	'New encryption system will be used from midnight. Details will be sent via encrypted post.',
// ];

interface questionProps {
	questionData: any;
	questions: respQuestions;
}
const Questions = (props: questionProps) => {
	useEffect(() => {
		props.questionData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	//	const defaultColor = getRGBValues(`rgb(${0xEE.toString(10)}, ${0xEE.toString(10)}, ${0xEE.toString(10)})`)
	const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		let cipherType = e.target.getAttribute('name') as string;
		let dist;
		if (cipherType === 'cipher') {
			let index = parseInt(e.target.id.replace('a', ''));
			dist = levenshtein(
				e.target.value.toLowerCase(),
				props.questions[cipherType][index].answer
			) as number;
			if (dist < props.questions[cipherType][index].answer.length / 2) {
				document.getElementById(`a${index}`)?.classList.remove('wrong');
				document.getElementById(`a${index}`)?.classList.add('correct');
				//	console.log(document.getElementById(`a${index}`)?.classList);
			} else {
				document.getElementById(`a${index}`)?.classList.remove('correct');

				document.getElementById(`a${index}`)?.classList.add('wrong');
			}
		} else if (cipherType === 'fibonacci') {
			let index = parseInt(e.target.id.replace('b', ''));
			dist = levenshtein(
				e.target.value.toLowerCase(),
				props.questions[cipherType][index].answer
			) as number;
			if (dist < props.questions[cipherType][index].answer.length / 2) {
				document.getElementById(`b${index}`)?.classList.remove('wrong');
				document.getElementById(`b${index}`)?.classList.add('correct');
				//	console.log(document.getElementById(`a${index}`)?.classList);
			} else {
				document.getElementById(`b${index}`)?.classList.remove('correct');

				document.getElementById(`b${index}`)?.classList.add('wrong');
			}
		}
	};

	let cipherQues = props.questions.cipher.map((sentence, i) => {
		return (
			<div className="row" id={`row${i}`} key={i}>
				<div className="cipher" id={`q${i}`}>
					{sentence.question}
				</div>
				<input
					type="text"
					name="cipher"
					className="plaintext"
					id={`a${i}`}
					placeholder="Enter deciphered message"
					onChange={inputChangeHandler}
				/>
			</div>
		);
	});
	let fiboQues = props.questions.fibonacci.map((sentence, i) => {
		return (
			<div className="row" id={`row${i}`} key={i}>
				<div className="cipher" id={`q${i}`}>
					{sentence.question}
				</div>
				<input
					type="text"
					name="fibonacci"
					className="plaintext"
					id={`b${i}`}
					placeholder="Enter deciphered message"
					onChange={inputChangeHandler}
				/>
			</div>
		);
	});
	return (
		<React.Fragment>
			<div className="messagecontainer" id="qcont">
				{cipherQues}
				<br />
				<h1 className="topmargin">Advanced Encryption</h1>
				{fiboQues}
			</div>
		</React.Fragment>
	);
};
const mapStateToProps = (state: mapStateToPropsInt) => {
	return {
		questions: state.questions.questions,
		teamNo: state.teamNo,
	};
};

export default connect(mapStateToProps, { questionData })(Questions);
