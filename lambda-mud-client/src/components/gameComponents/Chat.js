import React, { useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import styled from 'styled-components';

import { useDataContext } from '../../contexts/DataContext';

export default function Chat() {
	const [message, setMessage] = useState('');

	const {
		data: { players, chatOpen },
		dispatch,
	} = useDataContext();

	const handleChange = e => setMessage(e.target.value);

	const handleSend = () => {
		axiosWithAuth()
			.post('/adv/say/', { message })
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<ChatWrapper>
			<h3>
				Players:{' '}
				<span
					className='toggle-chat'
					onClick={() => dispatch({ type: 'TOGGLE_CHAT', payload: !chatOpen })}>
					({chatOpen ? 'hide' : 'show'})
				</span>
			</h3>
			<div>
				{chatOpen && (
					<>
						<ul>
							{players.map(player => (
								<li key={player}>{player}</li>
							))}
						</ul>
						<h4>Chat:</h4>
						<div className='chat-box'></div>
						<input
							type='text'
							id='message'
							name='message'
							value={message}
							onChange={handleChange}
						/>
						<button onClick={handleSend}>Send</button>
					</>
				)}
			</div>
		</ChatWrapper>
	);
}

const ChatWrapper = styled.div`
	position: absolute;
	top: 14rem;
	right: 2rem;
	z-index: 999;

	background-color: #bb1333;
	color: white;
	width: 30rem;
	border-radius: 1rem;
	padding: 1rem;

	box-shadow: 0.3rem 0.2rem darkred;

	display: flex;
	flex-direction: column;
	align-items: center;

	.toggle-chat {
		cursor: pointer;
	}

	ul,
	.chat-box {
		margin: 1rem 0;
		background-color: white;
		padding: 1rem;
		height: 16vh;
		overflow-y: auto;

		border-radius: 1rem;
		box-shadow: inset 0.3rem 0.2rem darkred;
	}

	h4 {
		margin-top: 2rem;
	}

	input {
		width: 100%;
	}

	button {
		width: 100%;
		margin-bottom: 0.5rem;
	}
`;
