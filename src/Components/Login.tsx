import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import axios from 'axios';
import '../CSS/Login.css';
import { teamNumber } from '../Actions';
import { mapStateToPropsInt, userData } from '../Interface';
import { Link, Form, useNavigate } from 'react-router-dom';

interface myProps {
	teamNumber: ActionCreatorWithPayload<userData, 'TEAM'>;
	teamNo: string;
}
const Login = (props: myProps) => {
	const [uname, setUname] = useState('');
	const [pass, setPass] = useState('');
	const navigate = useNavigate();
	const loginHandler = async () => {
		let loginData = await axios
			.post('http://localhost:8000/api/v1/user/login', {
				teamNo: uname,
				password: pass,
			})
			.then((res) => res.data);

		if (loginData && loginData.status === 'success') {
			console.log(loginData);
			window.localStorage.setItem('token', loginData.token);
			props.teamNumber({ teamNo: uname });
			navigate('/game');
		} else {
			return <Link to="/">Wrong credentials</Link>;
		}
	};
	return (
		<body className="container">
			<h1 className="page-title">Welcome Player !!!</h1>

			<form className="login-form form">
				<input
					type="email"
					className="input error-input"
					placeholder="Team Number"
					onChange={(e) => setUname(e.target.value)}
				/>
				<input
					type="password"
					className="input"
					placeholder="Password"
					onChange={(e) => setPass(e.target.value)}
				/>

				<input
					type="submit"
					value="Login"
					className="send-btn btn"
					onClick={loginHandler}
				/>
			</form>
		</body>
	);
};

const mapStateToProps = (state: mapStateToPropsInt) => {
	console.log(state);
	return {
		teamNo: state.teamNo,
	};
};
export default connect(mapStateToProps, { teamNumber })(Login);
