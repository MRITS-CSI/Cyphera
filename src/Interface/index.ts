export interface userData {
	teamNo: string;
}

export interface mapStateToPropsInt {
	teamNo: userData;
	questions: questionAPI;
}

export interface question {
	question: string;
	answer: string;
}

export interface respQuestions {
	fibonacci: question[];
	cipher: question[];
}
export interface questionAPI {
	questions: respQuestions;
	error: string;
	loading: boolean;
}
