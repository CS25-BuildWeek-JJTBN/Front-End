import React from 'react';

import { useDataContext } from '../../contexts/DataContext';

export default function Dashboard() {
	const {
		data: { isLoading, name },
	} = useDataContext();

	return (
		<div>
			<h3>Dashboard</h3>
			{isLoading ? <div>Loading...</div> : <p>Player: {name}</p>}
		</div>
	);
}
