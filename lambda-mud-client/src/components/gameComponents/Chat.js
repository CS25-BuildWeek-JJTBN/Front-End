import React, { useState } from 'react';
import styled from 'styled-components';

import { useDataContext } from '../../contexts/DataContext';

export default function Chat() {
	const [showChat, setShowChat] = useState(false);

	const {
		data: { players },
	} = useDataContext();

	return (
		<ChatWrapper>
			<h3>
				Players: {/* Chat{' '} */}
				<span className='toggle-chat' onClick={() => setShowChat(!showChat)}>
					(toggle)
				</span>
			</h3>
			<div>
				{showChat && (
					<>
						<ul>
							{players.map(player => (
								<li key={player}>{player}</li>
							))}
						</ul>
						<h4>Chat:</h4>
						<div className='chat-box'></div>
						<input type='text' />
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

	background-color: silver;
	width: 30rem;
	border-radius: 1rem;
	padding: 1rem;

	.toggle-chat {
		cursor: pointer;
	}

	ul,
	.chat-box {
		margin: 1rem 0;
		background-color: white;
		padding: 1rem;
		height: 25vh;
		overflow-y: scroll;
	}

	h4 {
		margin-top: 2rem;
	}
`;
