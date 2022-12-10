import React from 'react';
import { Link } from 'react-router-dom';
import Topbar from './Topbar';
import Container from './Container';

const Game = () => {
	console.log('Im here');
	if (window.localStorage.getItem('token')) {
		return (
			<div className="App">
				<Topbar />
				<Container />
			</div>
		);
	}

	return (
		<div>
			<Link to="/">Please login</Link>
		</div>
	);
};

export default Game;
