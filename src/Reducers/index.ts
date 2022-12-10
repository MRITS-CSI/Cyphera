import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const teamNo = (state = {}, action: { type: string; payload: any }) => {
	if (action.type === 'TEAM') {
		return { ...action.payload };
	}
	return state;
};

export default combineReducers({
	teamNo,
});
