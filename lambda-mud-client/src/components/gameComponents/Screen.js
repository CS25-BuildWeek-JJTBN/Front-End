import React from 'react';
import styled from 'styled-components';

import Map from './Map';
import Avatar from './Avatar';
import Chat from './Chat';
import Controls from './Controls';

export default function Screen() {
	return (
		<ScreenWrapper>
			<Map />
			<Chat />
			<div className='screen-bottom'>
				<Avatar />
				<Controls />
			</div>
		</ScreenWrapper>
	);
}

const ScreenWrapper = styled.div`
	flex-grow: 1;

	.screen-bottom {
		position: relative;
		bottom: 15rem;

		display: flex;
		justify-content: space-evenly;
	}
`;
