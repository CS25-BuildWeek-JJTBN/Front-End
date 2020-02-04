import React from 'react';

import { useDataContext } from '../../contexts/DataContext';

import { DashboardPanel } from '../../styled-components/styledComponents';

export default function Question() {
	const {
		data: { description },
	} = useDataContext();

	return (
		<DashboardPanel>
			<h3>Resource:</h3>
			<div className='text-box'>
				<a href={description} target='_blank' rel='noopener noreferrer'>
					{description}
				</a>
			</div>
		</DashboardPanel>
	);
}
