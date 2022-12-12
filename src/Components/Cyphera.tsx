import React from 'react';
import { genScore } from '../Utils/generateScore';
import API from '../API';
import '../planes.css';
import '../CSS/game.css';
import { useNavigate } from 'react-router-dom';
import { mapStateToPropsInt, respQuestions, userData } from '../Interface';
import { connect } from 'react-redux';
import Countdown from 'react-countdown';

interface myprops {
	questions: respQuestions;
	teamNo: userData;
}
const Cyphera = (props: myprops) => {
	let navigate = useNavigate();
	const onCountDown = async () => {
		let score = genScore(props.questions);

		let { data } = await API.patch(
			`/user/${props.teamNo.teamNo}`,
			{
				round1: score,
				isLogged: true,
			},
			{
				headers: {
					authorization: 'Bearer ' + window.localStorage.getItem('token'),
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
	};

	return (
		<div className="cypheraheading">
			<h1 className="cyphera">cyphera_</h1>
			<h2>
				<Countdown
					date={Date.now() + 1000 * 60 * 15}
					onComplete={onCountDown}
				/>
			</h2>
		</div>
	);
};
const mapStateToProps = (state: mapStateToPropsInt) => {
	return {
		questions: state.questions.questions,
		teamNo: state.teamNo,
	};
};
export default connect(mapStateToProps)(Cyphera);
