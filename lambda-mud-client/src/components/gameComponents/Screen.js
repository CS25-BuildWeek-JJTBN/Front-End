import React from 'react';
import styled from 'styled-components';

import Map from './Map';
import Chat from './Chat';

export default function Screen() {
	return (
		<ScreenWrapper>
			<Map />
			<Chat />
		</ScreenWrapper>
	);
}

const ScreenWrapper = styled.div`
	flex-grow: 1;
`;
