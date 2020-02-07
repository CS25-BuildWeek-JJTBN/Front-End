import React from 'react';
import styled from 'styled-components';

import { useDataContext } from '../../contexts/DataContext';

export default function PlayerBar() {
	const {
		data: { name, visitedRooms },
	} = useDataContext();

	const roomsVisited =
		visitedRooms &&
		visitedRooms.filter(
			content => content.title !== 'No question. Just an empty hallway.',
		).length;

	return (
		<DashBar>
			<h3>
				Player: <span className='span-normal'>{name}</span>
			</h3>
			<h3>
				Questions Found: <span className='span-normal'>{roomsVisited}</span>
			</h3>
			<h3>
				ISA:{' '}
				<span className='span-normal'>
					${roomsVisited * 300}/$30,000 ({roomsVisited}%)
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
	flex-wrap: wrap;

	color: white;

	@media screen and (max-width: 500px) {
		align-items: flex-start;
	}

	h3 {
		@media screen and (max-width: 450px) {
			font-size: 1rem;
		}

		@media screen and (max-width: 400px) {
			font-size: 0.9rem;
		}

		@media screen and (max-width: 370px) {
			font-size: 0.8rem;
		}

		@media screen and (max-width: 350px) {
			font-size: 0.7rem;
		}
	}

	.span-normal {
		font-weight: normal;
		margin-right: 3rem;
	}

	.stats {
		display: flex;
	}
`;
