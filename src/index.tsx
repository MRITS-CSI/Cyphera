import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './Reducers';
import './index.css';
import './planes.css';
import App from './App';
import { Provider } from 'react-redux';
const store = configureStore({ reducer });
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<RouterProvider router={App} />
	</Provider>
);
