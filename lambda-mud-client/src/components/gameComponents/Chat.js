import React, { useState } from 'react';
import styled from 'styled-components';

import { useDataContext } from '../../contexts/DataContext';

export default function Chat() {
	const [showChat, setShowChat] = useState(false);

	const {
		data: { isLoading, players },
	} = useDataContext();

	return (
		<ChatWrapper>
			<h3>
				Players: {/* Chat{' '} */}
				<ToggleChat onClick={() => setShowChat(!showChat)}>(toggle)</ToggleChat>
			</h3>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<div>
					{showChat && (
						<ul>
							{players.map(player => (
								<li key={player}>{player}</li>
							))}
						</ul>
					)}
				</div>
			)}
		</ChatWrapper>
	);
}

const ChatWrapper = styled.div`
	background-color: silver;
	width: 30rem;
	border-radius: 1rem;
	padding: 1rem;

	ul {
		margin-top: 1rem;
		background-color: white;
		padding: 1rem;
	}
`;

const ToggleChat = styled.span`
	cursor: pointer;
`;
