import { createAction, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { userData } from '../Interface';

// export const loginUser = (payload: userData) => {
// 	return async function (dispatch: Dispatch) {
// 		let { data } = await axios.post(
// 			'http://localhost:8000/api/v1/user/login',
// 			payload
// 		);
// 		dispatch({ type: 'LOGIN', payload: data });
// 	};
// };

export const teamNumber = createAction<userData, 'TEAM'>('TEAM');
