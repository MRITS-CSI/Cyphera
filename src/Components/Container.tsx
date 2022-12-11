import { connect } from 'react-redux';
import API from '../API';
import Demo from './Demo';
import Questions from './Questions';
import { genScore } from '../Utils/generateScore';
import { useNavigate } from 'react-router-dom';

import { mapStateToPropsInt, respQuestions, userData } from '../Interface';

interface myprops {
	questions: respQuestions;
	teamNo: userData;
}
const Container = (props: myprops) => {
	const navigate = useNavigate();
	const submitHandler = async () => {
		let score = genScore(props.questions);
		console.log(props.teamNo);
		let { data } = await API.patch(
			`/user/${props.teamNo.teamNo}`,
			{
				round1: score,
				isLogged: true,
			},
			{
				headers: {
					authorization: `Bearer ${window.localStorage.getItem('token')}`,
				},
			}
		);
		if (data.status === 'success') {
			window.localStorage.removeItem('token');
			navigate('/');

			alert('Your score has been submitted successfully');
		} else {
			alert('ERROR !!!, please contact the team immediately !!!');
		}
		console.log(score);
	};

	return (
		<div className="Container">
			<Questions />
			<Demo />
			<button onClick={submitHandler}>Click Me</button>
		</div>
	);
};
const mapStateToProps = (state: mapStateToPropsInt) => {
	return {
		questions: state.questions.questions,
		teamNo: state.teamNo,
	};
};
export default connect(mapStateToProps)(Container);
