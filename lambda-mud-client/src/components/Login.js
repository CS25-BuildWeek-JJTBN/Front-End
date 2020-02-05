import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { useUserContext } from '../contexts/UserContext';
import { baseURL } from '../utils/baseURL';

// Styled
import { StyledForm } from '../styled-components/styledComponents';
import Loading from './Loading';

export default function Login() {
	const history = useHistory();

	const {
		user: { isLoading },
		dispatch,
	} = useUserContext();

	const [credentials, setCredentials] = useState({
		username: '',
		password: '',
	});

	const [error, setError] = useState('');

	const handleChange = e =>
		setCredentials({ ...credentials, [e.target.name]: e.target.value });

	const handleSubmit = e => {
		e.preventDefault();
		dispatch({ type: 'LOGIN_START' });

		axios
			.post(`${baseURL}/login/`, credentials)
			.then(res => {
				// console.log(res);
				localStorage.setItem('token', res.data.key);
				dispatch({ type: 'LOGIN_SUCCESS' });
				history.push('/game');
			})
			.catch(err => {
				// console.log(err);
				dispatch({ type: 'LOGIN_FAILURE' });
				setError('Sorry, error logging in');
			});
	};

	return (
		<StyledForm>
			<h2>Login:</h2>
			{isLoading ? (
				<Loading />
			) : (
				<form onSubmit={handleSubmit}>
					<label htmlFor='username'>Username: </label>
					<input
						type='text'
						id='username'
						name='username'
						placeholder='_________'
						value={credentials.username}
						onChange={handleChange}
					/>

					<label htmlFor='password'>Password: </label>
					<input
						type='password'
						id='password'
						name='password'
						placeholder='_________'
						value={credentials.password}
						onChange={handleChange}
					/>

					<button type='submit'>Login</button>

					{error && <div className='error'>{error}</div>}
				</form>
			)}
		</StyledForm>
	);
}
