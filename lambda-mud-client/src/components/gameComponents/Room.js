import React from 'react';

import { useDataContext } from '../../contexts/DataContext';

import { DashboardPanel } from '../../styled-components/styledComponents';

export default function Room() {
	const {
		data: { title, description },
	} = useDataContext();

	return (
		<DashboardPanel>
			<h3>
				Room: <span className='span-normal'>{title}</span>
			</h3>
			<div>{description}</div>
		</DashboardPanel>
	);
}
