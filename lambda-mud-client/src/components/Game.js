import React from 'react';
import styled from 'styled-components';
import PlayerBar from './gameComponents/PlayerBar';
import Screen from './gameComponents/Screen';
import Dashboard from './gameComponents/Dashboard';

export default function Game() {
	return (
		<GameWrapper>
			<PlayerBar />
			<Screen />
			<Dashboard />
		</GameWrapper>
	);
}

const GameWrapper = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
`;
