import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../API';
import { userData } from '../Interface';

// export const questionData = () => {
// 	return async function (dispatch: Dispatch) {
// 		let { data } = await axios
// 			.get('http://localhost:8000/api/v1/question/', {
// 				headers: {
// 					authorization: 'Bearer ' + window.localStorage.getItem('token'),
// 				},
// 			})
// 			.then((res) => res.data);
// 		console.log(data);
// 		dispatch({ type: 'QUES', payload: data });
// 	};
// };

export const questionData = createAsyncThunk('QUES', () => {
	let data = API.get('/question/', {
		headers: {
			authorization: 'Bearer ' + "window.localStorage.getItem('token')",
		},
	})

		.then((res) => res.data)
		.then((res) => res.data);

	return data;
});

export const teamNumber = createAction<userData, 'TEAM'>('TEAM');
