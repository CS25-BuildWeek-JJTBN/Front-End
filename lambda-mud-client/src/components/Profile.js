import React from 'react';
import styled from 'styled-components';
import PlayerBar from './gameComponents/PlayerBar';
import CustomizeAvatar from './CustomizeAvatar';
import Accessories from './gameComponents/Accessories';
import SetMode from './SetMode';
import SavedQuestions from './SavedQuestions';

export default function Profile() {
	return (
		<div>
			<PlayerBar />
			<ProfileContent>
				<CustomizeAvatar />
				<Accessories />
				<SetMode />
				<SavedQuestions />
			</ProfileContent>
		</div>
	);
}

const ProfileContent = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: flex-start;
	flex-wrap: wrap;
`;
