import React from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import { useDataContext } from '../../contexts/DataContext';

import { DashboardPanel, Item } from '../../styled-components/styledComponents';

export default function ItemsList({ header, empty, items, endpoint }) {
	const {
		data: { id },
		dispatch,
	} = useDataContext();

	const handleClick = item => {
		dispatch({ type: 'ACTION_START' });

		axiosWithAuth()
			.post(`/adv/${endpoint}`, { item, room: id })
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
	};

	return (
		<DashboardPanel>
			<h3>{header}</h3>
			<div className='text-box'>
				{items && items.length === 0 && <div>{empty}</div>}
				{items &&
					items.map(item => (
						<Item key={item.id} onClick={() => handleClick(item.id)}>
							{item.color}
							{item.description}
						</Item>
					))}
			</div>
		</DashboardPanel>
	);
}
