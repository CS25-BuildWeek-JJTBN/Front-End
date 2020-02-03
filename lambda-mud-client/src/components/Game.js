import React, { useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { useDataContext } from '../contexts/DataContext';

import Map from './gameComponents/Map';
import Room from './gameComponents/Room';
import Inventory from './gameComponents/Inventory';
import Dashboard from './gameComponents/Dashboard';
import Controls from './gameComponents/Controls';
import Chat from './gameComponents/Chat';

export default function Game() {
	const {
		// data: { isLoading },
		dispatch,
	} = useDataContext();

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
			<h2>Game Page</h2>
			{/* {isLoading ? (
				<div>Loading...</div>
			) : (
				<> */}
			<Map />
			<Room />
			<Inventory />
			<Dashboard />
			<Controls />
			<Chat />
			{/* </>
			)} */}
		</div>
	);
}
