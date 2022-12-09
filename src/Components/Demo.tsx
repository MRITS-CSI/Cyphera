import React from 'react';
import { fibEncrypt } from '../Utils/fibencrypt';

let demos = [
	'Missiles launched from the north front.',
	'Movement detected within the old forest.',
	'A brown fox has been observed querying a jumping lazy dog.',
	'Testing encryption systems. Do not respond.',
];

const Demo = () => {
	let encrypedDemos = [
		fibEncrypt(demos[0]),
		fibEncrypt(demos[1]),
		fibEncrypt(demos[2]),
		fibEncrypt(demos[3]),
	];
	let demoData = encrypedDemos.map((demo, i) => {
		return (
			<div className="row" id={`row${i}`}>
				<div className="cipher" id={`ct${i}`}>
					{demos[i]}
				</div>
				<div className="plain" id={`pt${i}`}>
					{demo}
				</div>
			</div>
		);
	});
	return (
		<div className="messagecontainer" id="msgcont">
			<h1>Deciphered messages</h1>
			{demoData}
		</div>
	);
};

export default Demo;
