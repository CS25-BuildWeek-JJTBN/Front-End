import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

// Context Api
import { useUserContext } from '../contexts/UserContext';
import { baseURL } from '../utils/baseURL';

//Styled Components
import styled from 'styled-components';

export default function Register() {
	const history = useHistory();

	const {
		user: { isLoading, error },
		dispatch,
	} = useUserContext();

	const [registrationInfo, setRegistrationInfo] = useState({
		username: '',
		password1: '',
		password2: '',
	});

	const handleChange = e => {
		setRegistrationInfo({
			...registrationInfo,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch({ type: 'REGISTRATION_START' });

		axios
			.post(`${baseURL}/registration/`, registrationInfo)
			.then(res => {
				// console.log(res);
				localStorage.setItem('token', res.data.key);
				dispatch({ type: 'REGISTRATION_SUCCESS' });
				history.push('/game');
			})
			.catch(err => {
				// console.log(err);
				dispatch({ type: 'REGISTRATION_FAILURE' });
			});
	};

	return (
		<RegisterPage>
			<h2> Register Your Name </h2>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<form onSubmit={handleSubmit}>
					<label htmlFor='username'>Username: </label>
					<input
						type='text'
						id='username'
						name='username'
						placeholder='Username'
						value={registrationInfo.username}
						onChange={handleChange}
					/>

					<label htmlFor='password1'>Password 1: </label>
					<input
						type='password'
						id='password1'
						name='password1'
						placeholder='Password 1'
						value={registrationInfo.password1}
						onChange={handleChange}
					/>

					<label htmlFor='password1'>Password 2: </label>
					<input
						type='password'
						id='password2'
						name='password2'
						placeholder='Password 2'
						value={registrationInfo.password2}
						onChange={handleChange}
					/>

					<button type='submit'>Register</button>

					{error && <div>{error}</div>}
				</form>
			)}
		</RegisterPage>
	);
}


const RegisterPage = styled.div`
	border: black 2px;
`;