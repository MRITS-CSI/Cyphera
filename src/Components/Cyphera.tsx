import React from 'react';
import { useNavigate } from 'react-router-dom';

import Countdown from 'react-countdown';

const Cyphera = () => {
	let navigate = useNavigate();
	const onCountDown = async () => {
		/**
		 * Score API Call
		 */
		navigate('/');
	};

	return (
		<div className="cypheraheading">
			<h1>cyphera_</h1>
			<h2>
				<Countdown date={Date.now() + 60000} onComplete={onCountDown} />
			</h2>
		</div>
	);
};

export default Cyphera;
