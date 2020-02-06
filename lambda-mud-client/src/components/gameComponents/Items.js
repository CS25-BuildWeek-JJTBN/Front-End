import React from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import { useDataContext } from '../../contexts/DataContext';

import { DashboardPanel, Item } from '../../styled-components/styledComponents';

export default function Items() {
	const {
		data: { roomItems, currentRoom },
		dispatch,
	} = useDataContext();

	const handleClick = item => {
		dispatch({ type: 'ACTION_START' });

		axiosWithAuth()
			.post('/adv/pickup/', { item, room: currentRoom })
			.then(res => {
				console.log(res.data);
				dispatch({
					type: 'ACTION_SUCCESS',
					payload: {
						roomItems: res.data.room_items,
						playerItems: res.data.player_items,
					},
				});
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: 'ACTION_FAILURE' });
			});
	};

	return (
		<DashboardPanel>
			<h3>Item(s) in Room:</h3>
			<div className='text-box'>
				{roomItems && roomItems.length === 0 && <div>No items here</div>}
				{roomItems &&
					roomItems.map(item => (
						<Item key={item.id} onClick={() => handleClick(item.id)}>
							{item.color}
							{item.description}
						</Item>
					))}
			</div>
		</DashboardPanel>
	);
}
