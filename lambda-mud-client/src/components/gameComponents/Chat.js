import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import styled from 'styled-components';
import Pusher from 'pusher-js';

import { useDataContext } from '../../contexts/DataContext';

export default function Chat() {
	const {
		data: { name, uuid, players, chatOpen },
		dispatch,
	} = useDataContext();

	const [chat, setChat] = useState({
		text: '',
		username: '',
		chats: [],
	});

	useEffect(() => {
		if (uuid && name) {
			setChat({ ...chat, username: name });

			const pusher = new Pusher('1ba70163374ac8ff9fba', {
				cluster: 'us2',
				encrypted: true,
			});

			const channel = pusher.subscribe(`p-channel-${uuid}`);

			channel.bind('broadcast', data => {
				// console.log(chat.chats);
				// console.log(data);
				// [...chat.chats, data]
				setChat({ ...chat, username: name, chats: [...chat.chats, data] });
			});
		}
	}, [uuid]);

	const handleChange = e => setChat({ ...chat, text: e.target.value });

	const handleSend = () => {
		const payload = { message: chat.text };
		console.log('1', payload);

		axiosWithAuth()
			.post('/adv/say/', payload)
			.then(res => {
				console.log(res);

				// console.log('2', payload);

				setChat({
					...chat,
					chats: [...chat.chats, { message: `${chat.username}: ${chat.text}` }],
					text: '',
				});
			})
			.catch(err => {
				console.log(err);
			});
	};

	// console.log(chat.chats && chat.chats);

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
						<div className='chat-box'>
							{chat.chats &&
								chat.chats.map((message, index) => (
									<div key={index}>{message.message}</div>
								))}
						</div>
						<input
							type='text'
							id='message'
							name='message'
							value={chat.text}
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
	left: 2rem;
	z-index: 1205;

	@media screen and (max-width: 750px) {
		top: 17rem;
	}

	@media screen and (max-width: 500px) {
		top: 18rem;
		left: 1rem;
	}

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
		// background-color: white;
		background-color: #0d0208;
		// color: black;
		color: #00ff41;

		padding: 1rem;
		height: 20vh;
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
