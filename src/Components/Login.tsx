import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import API from '../API';
import '../CSS/Login.css';
import { teamNumber } from '../Actions';
import { mapStateToPropsInt, userData } from '../Interface';
import { useNavigate } from 'react-router-dom';

interface myProps {
	teamNumber: ActionCreatorWithPayload<userData, 'TEAM'>;
	teamNo: string;
}
const Login = (props: myProps) => {
	const [uname, setUname] = useState('');
	const [pass, setPass] = useState('');
	const navigate = useNavigate();

	const loginHandler = async () => {
		let loginData = await API.post(
			'/user/login',
			{
				teamNo: uname,
				password: pass,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		).then((res) => res.data);

		if (loginData && loginData.status === 'success' && !loginData.isLogged) {
			window.localStorage.setItem('token', loginData.token);
			props.teamNumber({ teamNo: uname });
			navigate('/game');
		} else {
			alert('Wrong credentials or Already submitted the game');
			navigate('/');
		}
	};
	return (
		<div>
			<div className="container">
				<div className="fcontainer">
					<form className="lcontf">
						<h1 className="logintitle">Login</h1>

						<div className="fields">
							<input
								type="text"
								className="inp"
								placeholder="Team Number"
								onChange={(e) => {
									setUname(e.target.value);
								}}
							/>
							<input
								type="password"
								className="inp"
								placeholder="Password"
								onChange={(e) => {
									setPass(e.target.value);
								}}
							/>{' '}
							<button
								type="button"
								className="loginbutton"
								onClick={loginHandler}
							>
								Login
							</button>
						</div>

						<div>
							<p className="desc">
								Enter your team number and your password (your password will
								have been mailed to your team leader) and wait until you are
								told to login.
							</p>
						</div>
					</form>
				</div>

				<div className="fcontainer right">
					<div>
						<h1 className="eventtitle">Praestantia</h1>
						<h3 className="eventsub">
							A CSI MRITS Student Chapter technical event
						</h3>
					</div>

					<div className="round">
						<h3 className="roundc">Round 1</h3>
						<h2 className="roundtitle">Cipherer</h2>
					</div>
					<div className="rdesc">
						<p className="rounddesc">
							You will be given two sets of encrypted messages, with examples
							for each set. Using the examples, figure out the cipher used and
							decipher the messages.
						</p>
						<p className="rounddesc">
							You will be scored based on the time it takes you to decipher and
							the amount of text you accurately decipher.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state: mapStateToPropsInt) => {
	return {
		teamNo: state.teamNo.teamNo,
	};
};
export default connect(mapStateToProps, { teamNumber })(Login);
