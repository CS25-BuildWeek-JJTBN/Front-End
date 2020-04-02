import React from 'react';
import { useUserContext } from '../contexts/UserContext';
import {
	ProfilePanelWrapper,
	Checkbox,
} from '../styled-components/styledComponents';

export default function SetMode() {
	const {
		user: { hardMode },
		dispatch,
	} = useUserContext();

	return (
		<ProfilePanelWrapper>
			<h3>Set Game Difficulty:</h3>
			<div className='color-row'>
				<h4>Game Mode:</h4>
				<div className='check-boxes'>
					<Checkbox
						onClick={() =>
							dispatch({ type: 'SET_MODE', payload: { hardMode: false } })
						}
						trueValue={!hardMode}
					/>{' '}
					Easy{' '}
					<Checkbox
						onClick={() =>
							dispatch({ type: 'SET_MODE', payload: { hardMode: true } })
						}
						trueValue={hardMode}
					/>{' '}
					Hard
				</div>
			</div>
		</ProfilePanelWrapper>
	);
}
