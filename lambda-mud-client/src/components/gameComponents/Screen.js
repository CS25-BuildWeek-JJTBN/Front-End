import React from 'react';
import styled from 'styled-components';

import Map from './Map';
import Chat from './Chat';
// import App from './chatComponents/ChatApp';

export default function Screen() {
	return (
		<ScreenWrapper>
			{/* <App /> */}
			<Map />
			<Chat />
		</ScreenWrapper>
	);
}

const ScreenWrapper = styled.div`
	flex-grow: 1;
	overflow: auto;
`;
