import React from 'react';

import { useDataContext } from '../../contexts/DataContext';

export default function Map() {
	const {
		data: { error_msg },
	} = useDataContext();

	return (
		<div>
			<h3>Map</h3>
			<div>{error_msg}</div>
		</div>
	);
}
