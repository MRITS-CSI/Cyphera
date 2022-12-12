import React from 'react';
import { fibEncrypt } from '../Utils/fibencrypt';
import { caesarShift } from '../Utils/caesarencrypt';
import '../CSS/game.css';

let demos = [
	'Missiles launched from the north front.',
	'Movement detected within the old forest.',
	'A brown fox has been observed querying a jumping lazy dog.',
	'Testing encryption systems. Do not respond.',
];

let ndemos = [
	'Enemy communication interception failed. Report to command.',
	'Position advance will occur at 06:00 tomorrow.',
];

const Demo = () => {
	let encrypedcDemos = [caesarShift(ndemos[0], 7), caesarShift(ndemos[1], 7)];

	let encrypednDemos = [
		fibEncrypt(demos[0]),
		fibEncrypt(demos[1]),
		fibEncrypt(demos[2]),
		fibEncrypt(demos[3]),
	];
	let demoData = encrypedcDemos.map((demo, i) => {
		return (
			<div className="row" id={`row${i}`} key={i}>
				<div className="cipher" id={`ct${i}`}>
					{ndemos[i]}
				</div>
				<div className="plain" id={`pt${i}`}>
					{demo}
				</div>
			</div>
		);
	});

	let fdemoData = encrypednDemos.map((demo, i) => {
		return (
			<div className="row" id={`nrow${i}`} key={i}>
				<div className="cipher" id={`nct${i}`}>
					{demos[i]}
				</div>
				<div className="plain" id={`npt${i}`}>
					{demo}
				</div>
			</div>
		);
	});
	return (
		<div className="messagecontainer" id="msgcont">
			<h1>Deciphered messages</h1>
			{demoData}
			<h1 className="topmargin m2">
				<br /> Advanced encryption - decrypted messages
			</h1>
			{fdemoData}
		</div>
	);
};

export default Demo;
