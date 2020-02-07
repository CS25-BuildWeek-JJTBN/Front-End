import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
// Context API
import { useUserContext } from '../contexts/UserContext';
import { baseURL } from '../utils/baseURL';

// Styled Components & Components

// import { LetterSelect} from '../styled-components/styledComponents';
import { StyledForm } from '../styled-components/styledComponents';
import { letter_data } from './LetterData';
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
	const [typeField, setTypeField ] = useState('');

	const [error, setError] = useState('');

	const handleChange = e => {
		setRegistrationInfo({
			...registrationInfo,
			[e.target.name]: e.target.value,
		});
	};
	const handleLetter = letter => {
		console.log(typeField)
		console.log(letter)
		if (typeField === '') {
			setError('Please click on field headings to type')
		} else {
			setRegistrationInfo({
				...registrationInfo,
				[typeField]: registrationInfo[typeField] + letter
			})
		}
	}

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
					<label htmlFor='username'><span style={{textDecoration: typeField=== 'username' && 'underline'}} onClick={()=>setTypeField('username')}>Username:</span> </label>
					<input
						type='text'
						id='username'
						name='username'
						placeholder='___________'
						value={registrationInfo.username}
						onChange={handleChange}
					/>

					<label htmlFor='password1'><span style={{textDecoration: typeField=== 'password1' && 'underline'}} onClick={()=>setTypeField('password1')}>Password:</span> </label>
					<input
						type='password'
						id='password1'
						name='password1'
						placeholder='___________'
						value={registrationInfo.password1}
						onChange={handleChange}
					/>

					<label htmlFor='password2'><span style={{textDecoration: typeField=== 'password2' && 'underline'}} onClick={()=>setTypeField('password2')}>Re-enter your Password: </span></label>
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
			<LetterBox  handleLetter={handleLetter}/>
					{/* <LetterSelect>
			{letter_data.map(letter => (
				<div key={letter} onClick={() => handleLetter(letter)}><h2>{letter}</h2></div>
			))}
		</LetterSelect> */}
		</StyledForm>
	);
}

// const LetterSelect = styled.div`
// border: solid 4px #2f2b4a;
// background-color: #F0F4F7;
// height: 28rem;
// width: 55rem;
// display: flex;
// flex-wrap: wrap;

// h2{
// 	display: flex;
// 	padding: 1rem;
// 	color: #bb1333;
// 	cursor: pointer;
// 	&:hover {
// 		background-color: #9d96ca;
// 		color: white;
// 		border-radius: 20%;
// 	}
// }
// `;