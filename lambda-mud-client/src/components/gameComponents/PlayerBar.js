import React from 'react';
import styled from 'styled-components';

import { useDataContext } from '../../contexts/DataContext';

export default function PlayerBar() {
	const {
		data: { name },
	} = useDataContext();

	const roomsVisited = 10;

	return (
		<DashBar>
			<h3>
				Player: <span className='span-normal'>{name}</span>
			</h3>
			<h3>
				Rooms: <span className='span-normal'>{roomsVisited}</span>
			</h3>
			<h3>
				ISA Paid:{' '}
				<span className='span-normal'>
					${roomsVisited * 300}/$30,000 ({0.1 * roomsVisited}%)
				</span>
			</h3>
		</DashBar>
	);
}

const DashBar = styled.div`
	padding: 1rem 2rem;
	background-color: #2f2b4a;
	display: flex;
	justify-content: space-between;
	align-items: center;

	color: white;

	.span-normal {
		font-weight: normal;
	}

	.stats {
		display: flex;
	}
`;
