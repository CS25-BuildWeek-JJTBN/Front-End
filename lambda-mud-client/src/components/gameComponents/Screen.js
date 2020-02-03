import React from 'react';
import styled from 'styled-components';

import Map from './Map';
import Chat from './Chat';
import Controls from './Controls';

export default function Screen() {
	return (
		<ScreenWrapper>
			<ScreenRight>
				<Chat />
			</ScreenRight>
			<Map />
			<Controls />
		</ScreenWrapper>
	);
}

const ScreenWrapper = styled.div`
	border: 3px solid purple;
	flex-grow: 2;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const ScreenRight = styled.div`
	align-self: flex-end;
	margin-top: 1rem;
	margin-right: 1rem;
`;
