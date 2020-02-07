import React from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import { useDataContext } from '../../contexts/DataContext';

import { DashboardPanel, Item } from '../../styled-components/styledComponents';

export default function ItemsList({ header, empty, items, endpoint }) {
	const {
		// data: { player_items, id },
		data,
		dispatch,
	} = useDataContext();

	// console.log(player_items.map(item => item.description));

	const handleClick = item => {
		const currentItems = data.player_items.map(item => item.description);
		const itemCheck = 'has_' + item.description.toLowerCase();
		if (endpoint === 'pickup' && currentItems.includes(item.description)) {
			dispatch({
				type: 'SET_ERROR',
				payload: 'You already have one of those!',
			});
		} else if (endpoint === 'drop' && data[itemCheck]) {
			dispatch({
				type: 'SET_ERROR',
				payload: `You can't drop something you're wearing!`,
			});
		} else {
			dispatch({ type: 'ACTION_START' });

			axiosWithAuth()
				.post(`/adv/${endpoint}`, { item: item.id, room: data.id })
				.then(res => {
					// console.log(res.data);
					dispatch({
						type: 'UPDATE_DATA_BY_FIELD',
						payload: { key: 'room_items', value: res.data.room_items },
					});
					dispatch({
						type: 'UPDATE_DATA_BY_FIELD',
						payload: { key: 'player_items', value: res.data.player_items },
					});
				})
				.catch(err => {
					console.log(err);
					dispatch({ type: 'ACTION_FAILURE' });
				});
		}
	};

	return (
		<DashboardPanel>
			<h3>{header}</h3>
			<div className='text-box'>
				{items && items.length === 0 && <div>{empty}</div>}
				{items &&
					items.map(item => (
						<Item key={item.id} onClick={() => handleClick(item)}>
							{item.color}
							{item.description}
						</Item>
					))}
			</div>
		</DashboardPanel>
	);
}
