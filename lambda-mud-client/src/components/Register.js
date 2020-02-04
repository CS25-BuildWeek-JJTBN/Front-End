import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

// Context API
import { useUserContext } from '../contexts/UserContext';
import { baseURL } from '../utils/baseURL';

// Styled Components & Components
import { StyledForm } from '../styled-components/styledComponents';
import Loading from './Loading';

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
		<StyledForm>
			<h2>Register:</h2>
			{/* <h2> End </h2> */}
			{isLoading ? (
				<Loading />
			) : (
				<form onSubmit={handleSubmit}>
					<label htmlFor='username'>Username: </label>
					<input
						type='text'
						id='username'
						name='username'
						placeholder='___________'
						value={registrationInfo.username}
						onChange={handleChange}
					/>

					<label htmlFor='password1'>Password 1: </label>
					<input
						type='password'
						id='password1'
						name='password1'
						placeholder='___________'
						value={registrationInfo.password1}
						onChange={handleChange}
					/>

					<label htmlFor='password1'>Password 2: </label>
					<input
						type='password'
						id='password2'
						name='password2'
						placeholder='___________'
						value={registrationInfo.password2}
						onChange={handleChange}
					/>

					<button type='submit'>Register</button>

					{error && <div>{error}</div>}
				</form>
			)}
		</StyledForm>
	);
}
