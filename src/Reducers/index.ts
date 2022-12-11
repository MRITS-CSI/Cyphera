import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { questionData } from '../Actions';
const teamNo = (state = {}, action: { type: string; payload: any }) => {
	if (action.type === 'TEAM') {
		return { ...action.payload };
	}
	return state;
};

const initialState = {
	loading: false,
	questions: { cipher: [], fibonacci: [] },
	error: '',
};
const questions = createSlice({
	name: 'QUES',
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(questionData.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(questionData.fulfilled, (state, action: any) => {
			state.loading = false;
			state.questions = action.payload;
		});
		builder.addCase(questionData.rejected, (state, action: any) => {
			state.loading = false;
			state.questions = action.error.message;
		});
	},
});

export default combineReducers({
	teamNo,
	questions: questions.reducer,
});
