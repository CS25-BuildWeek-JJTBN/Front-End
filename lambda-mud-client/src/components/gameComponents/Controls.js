import React from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import { useDataContext } from '../../contexts/DataContext';

export default function Controls() {
	const { dispatch } = useDataContext();

	const handleClick = direction => {
		// console.log(direction);
		dispatch({ type: 'MOVE_START' });

		axiosWithAuth()
			.post('/adv/move/', { direction })
			.then(res => {
				// console.log(res.data);
				dispatch({
					type: 'MOVE_SUCCESS',
					payload: {
						name: res.data.name,
						title: res.data.title,
						description: res.data.description,
						players: res.data.players,
						error_msg: res.data.error_msg,
					},
				});
			})
			.catch(err => {
				// console.log(err);
				dispatch({ type: 'MOVE_FAILURE' });
			});
	};

	return (
		<div>
			<h3>Controls</h3>
			<button onClick={() => handleClick('n')}>North</button>
			<button onClick={() => handleClick('s')}>South</button>
			<button onClick={() => handleClick('e')}>East</button>
			<button onClick={() => handleClick('w')}>West</button>
		</div>
	);
}
