import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import Pusher from 'pusher-js';
import ChatList from './ChatList';
import ChatBox from './ChatBox';

export default function ChatApp() {
	const [chat, setChat] = useState({
		text: '',
		username: '',
		chats: [],
	});

	useEffect(() => {
		const username = 'Jonathan';
		setChat({ username });
		console.log(username);
		const pusher = new Pusher('1ba70163374ac8ff9fba', {
			cluster: 'us2',
			encrypted: true,
		});
		const channel = pusher.subscribe(
			'p-channel-aad74f89-851e-4e1d-a193-4cea23263796',
		);
		channel.bind('broadcast', data =>
			setChat({ chats: [...chat.chats, data], test: '' }),
		);
	}, []);

	const handleTextChange = e => {
		if (e.keyCode === 13) {
			const payload = { username: chat.username, message: chat.text };

			axiosWithAuth()
				.post('/adv/say/', payload)
				.then(res => console.log(res))
				.catch(err => console.log(err));
		} else {
			setChat({ text: e.target.value });
		}
	};

	return (
		<div>
			<section>
				<ChatList chats={chat.chats} />
				<ChatBox
					text={chat.text}
					username={chat.username}
					handleTextChange={handleTextChange}
				/>
			</section>
		</div>
	);
}
