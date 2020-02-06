import React, { useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

import PlayerBar from './gameComponents/PlayerBar';
import Screen from './gameComponents/Screen';
import Dashboard from './gameComponents/Dashboard';

import { visitedRoomsObjToArray } from '../utils/visitedRoomsFunctions';

export default function Game() {
	const { dispatch } = useDataContext();

	const processAttributes = data => {
		const attributesArray = [
			'skin_tone',
			'pupil_color',
			'glasses_color',
			'glasses_style',
			'hoodie_color',
			'pants_color',
			'shoe_color',
		];

		const filteredData = Object.keys(data)
			.filter(key => attributesArray.includes(key))
			.reduce((obj, key) => {
				return { ...obj, [key]: data[key] };
			}, {});

		Object.keys(filteredData).forEach(key => {
			if (!filteredData[key] || filteredData[key] === 'DEFAULT DESCRIPTION')
				delete filteredData[key];
		});

		Object.keys(filteredData).forEach(key => {
			const value = filteredData[key];
			dispatch({ type: 'SET_ATTRIBUTE', payload: { attribute: key, value } });
		});
	};

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
						visitedRooms: visitedRoomsObjToArray(res.data.visited_rooms),
					},
				});

				processAttributes(res.data);
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
