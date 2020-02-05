import React from 'react';

import PlayerBar from './gameComponents/PlayerBar';
import CustomizeAvatar from './CustomizeAvatar';
import SavedQuestions from './SavedQuestions';

export default function Profile() {
	return (
		<div>
			<PlayerBar />
			<CustomizeAvatar />
			<SavedQuestions />
		</div>
	);
}
