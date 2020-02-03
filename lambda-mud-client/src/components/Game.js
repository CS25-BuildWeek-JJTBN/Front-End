import React, { useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { useDataContext } from '../contexts/DataContext';

import PlayerBar from './gameComponents/PlayerBar';
import Screen from './gameComponents/Screen';
import Dashboard from './gameComponents/Dashboard';

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
			<PlayerBar />
			<Screen />
			<Dashboard />
		</div>
	);
}
