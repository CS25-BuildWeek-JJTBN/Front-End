import React, { useEffect, useState, useRef } from 'react';

import { useDataContext } from '../../contexts/DataContext';

import { DashboardPanel } from '../../styled-components/styledComponents';

export default function Question() {
	const {
		data: { title },
	} = useDataContext();

	return (
		<DashboardPanel>
			<h3>Interview Question:</h3>
			<div className='text-box'>{title}</div>
		</DashboardPanel>
	);
}
