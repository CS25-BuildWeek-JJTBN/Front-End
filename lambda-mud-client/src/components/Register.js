import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

// Context API
import { useUserContext } from '../contexts/UserContext';
import { baseURL } from '../utils/baseURL';

// Styled Components & Components
import { LetterSelect} from '../styled-components/styledComponents';
import { StyledForm } from '../styled-components/styledComponents';
import {letter_data} from './LetterData';
import LetterBox from './LetterBox';
import Loading from './Loading';

export default function Register() {
	const history = useHistory();

	const {
		user: { isLoading },
		dispatch,
	} = useUserContext();

	const [registrationInfo, setRegistrationInfo] = useState({
		username: '',
		password1: '',
		password2: '',
	});

	const [error, setError] = useState('');

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
				setError('Sorry, error registering');
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

					<label htmlFor='password1'>Password: </label>
					<input
						type='password'
						id='password1'
						name='password1'
						placeholder='___________'
						value={registrationInfo.password1}
						onChange={handleChange}
					/>

					<label htmlFor='password1'>Re-enter your Password: </label>
					<input
						type='password'
						id='password2'
						name='password2'
						placeholder='___________'
						value={registrationInfo.password2}
						onChange={handleChange}
					/>

					<button type='submit'>Register</button>

					{error && <div className='error'>{error}</div>}
				</form>
			)}
					<LetterSelect>
			{letter_data.map(letter => (
				<LetterBox key={letter} letter={letter} />
			))}
		</LetterSelect>
		</StyledForm>

	);
}

