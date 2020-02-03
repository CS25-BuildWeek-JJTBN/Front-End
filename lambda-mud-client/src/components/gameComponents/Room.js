import React from 'react';

import { useDataContext } from '../../contexts/DataContext';

export default function Room() {
	const {
		data: { isLoading, title, description },
	} = useDataContext();

	return (
		<div>
			<h3>Room</h3>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<>
					<h4>{title}</h4>
					<p>{description}</p>
				</>
			)}
		</div>
	);
}
