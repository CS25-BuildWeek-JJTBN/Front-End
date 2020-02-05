import React from 'react';
import styled from 'styled-components';

import PlayerBar from './gameComponents/PlayerBar';
import CustomizeAvatar from './CustomizeAvatar';
import SavedQuestions from './SavedQuestions';

export default function Profile() {
	return (
		<div>
			<PlayerBar />
			<ProfileContent>
				<CustomizeAvatar />
				<SavedQuestions />
			</ProfileContent>
		</div>
	);
}

const ProfileContent = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: flex-start;

	@media screen and (max-width: 700px) {
		flex-direction: column;
		align-items: center;
	}
`;
