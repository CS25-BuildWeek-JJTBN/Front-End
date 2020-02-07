import React, { useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

import PlayerBar from './gameComponents/PlayerBar';
import CustomizeAvatar from './CustomizeAvatar';
import Accessories from './gameComponents/Accessories';
import SetMode from './SetMode';
import SavedQuestions from './SavedQuestions';

import { processAttributes } from '../utils/processAttributes';
import { visitedRoomsObjToArray } from '../utils/visitedRoomsFunctions';

export default function Profile() {
	const { dispatch } = useDataContext();

	useEffect(() => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.get('/adv/init/')
			.then(res => {
				// console.log(res.data);
				processAttributes(res.data, dispatch);

				dispatch({
					type: 'GET_PLAYER_ITEMS',
					payload: { playerItems: res.data.player_items },
				});

				dispatch({
					type: 'GET_VISITED_ROOMS',
					payload: {
						visitedRooms: visitedRoomsObjToArray(res.data.visited_rooms),
					},
				});
			})
			.catch(err => {
				// console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	}, []);

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
