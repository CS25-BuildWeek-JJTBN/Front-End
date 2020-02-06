import React from 'react';

import { useDataContext } from '../../contexts/DataContext';

import { DashboardPanel } from '../../styled-components/styledComponents';

export default function Inventory() {
	const {
		data: { playerItems },
	} = useDataContext();

	return (
		<DashboardPanel>
			<h3>Inventory:</h3>
			<div className='text-box'>
				{playerItems.length === 0 && <div>You don't have any items</div>}
				{playerItems.map(item => (
					<div key={item.id}>
						{item.color}
						{item.description}
					</div>
				))}
			</div>
		</DashboardPanel>
	);
}
