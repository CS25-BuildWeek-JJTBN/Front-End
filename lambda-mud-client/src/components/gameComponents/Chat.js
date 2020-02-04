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
					<ul>
						{players.map(player => (
							<li key={player}>{player}</li>
						))}
					</ul>
				)}
			</div>
		</ChatWrapper>
	);
}

const ChatWrapper = styled.div`
	position: absolute;
	top: 13rem;
	right: 1rem;

	background-color: silver;
	width: 30rem;
	border-radius: 1rem;
	padding: 1rem;

	ul {
		margin-top: 1rem;
		background-color: white;
		padding: 1rem;
	}

	.toggle-chat {
		cursor: pointer;
	}
`;
