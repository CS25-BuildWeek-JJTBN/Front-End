import React from 'react';
import styled from 'styled-components';

import { useDataContext } from '../../contexts/DataContext';

export default function PlayerBar() {
	const {
		data: { name },
	} = useDataContext();

	return (
		<DashBar>
			<h3>
				Player: <span className='span-normal'>{name}</span>
			</h3>
			<div>**DASHBOARD STATS**</div>
		</DashBar>
	);
}

const DashBar = styled.div`
	padding: 1rem;
	background-color: #2f2b4a;
	display: flex;
	justify-content: space-between;

	color: white;

	.span-normal {
		font-weight: normal;
	}
`;
