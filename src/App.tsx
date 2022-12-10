import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Game from './Components/Game';
import Login from './Components/Login';

const App = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
	},
	{
		path: '/game',
		element: <Game />,
	},
]);

export default App;
