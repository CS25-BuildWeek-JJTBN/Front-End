import React from 'react';

import { useDataContext } from '../../contexts/DataContext';

import { DashboardPanel } from '../../styled-components/styledComponents';

export default function Items() {
	const {
		data: { roomItems },
	} = useDataContext();

	return (
		<DashboardPanel>
			<h3>Item(s) in Room:</h3>
			<div className='text-box'>
				{roomItems.length === 0 && <div>No items here</div>}
				{roomItems.map(item => (
					<div>
						{item.color}
						{item.description}
					</div>
				))}
			</div>
		</DashboardPanel>
	);
}
