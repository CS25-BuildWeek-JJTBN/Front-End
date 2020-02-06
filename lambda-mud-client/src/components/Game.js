import React, { useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

import PlayerBar from './gameComponents/PlayerBar';
import Screen from './gameComponents/Screen';
import Dashboard from './gameComponents/Dashboard';

import { visitedRoomsObjToArray } from '../utils/visitedRoomsFunctions';
import { processAttributes } from '../utils/processAttributes';

export default function Game() {
	const { dispatch } = useDataContext();

	useEffect(() => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.get('/adv/init/')
			.then(res => {
				// console.log(res.data);
				dispatch({
					type: 'GET_DATA_SUCCESS',
					payload: {
						// uuid: res.data.uuid,
						name: res.data.name,
						title: res.data.title,
						description: res.data.description,
						players: res.data.players,
						room: res.data.id,
						roomItems: res.data.room_items,
						visitedRooms: visitedRoomsObjToArray(res.data.visited_rooms),
						playerItems: res.data.player_items,
					},
				});

				processAttributes(res.data, dispatch);
			})
			.catch(err => {
				// console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	}, []);

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
