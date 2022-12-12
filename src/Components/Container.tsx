import { connect } from 'react-redux';
import API from '../API';
import Demo from './Demo';
import Questions from './Questions';
import { genScore } from '../Utils/generateScore';
import { useNavigate } from 'react-router-dom';
import "../CSS/game.css"

import { mapStateToPropsInt, respQuestions, userData } from '../Interface';

interface myprops {
	questions: respQuestions;
	teamNo: userData;
}
const Container = (props: myprops) => {
	const navigate = useNavigate();
	const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

	const animSet = async (x: string) => {
		let y : HTMLElement = document.getElementById(x)!;
		y.style.animation = 'planeCrashing';
		y.style.animationDuration = '3s';
		y.style.animationTimingFunction = 'ease-in-out';
		y.style.animationDelay = '0s';
		y.style.transition = '0s';
		y.addEventListener('animationend', () => {
			y.style.display = 'none';
		});
		await sleep(3000);
	} 

	const submitHandler = async () => {
		let score = genScore(props.questions);
		console.log(props.teamNo);
		if (parseFloat(score) > 25) {
			await animSet('plp4');
		}
		if (parseFloat(score) > 50) {
			await animSet('plp3');
		}
		if (parseFloat(score) > 75) {
			await animSet('plp2');
		}
		if (parseFloat(score) > 100) {
			await animSet('plp1');
		}
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
			<button className = 'sbuton' onClick={submitHandler}>Submit</button>
			{/* <button className = 'sbuton' onClick={() => {
				
			}}></button> */}
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
