import React from 'react';
import styled from 'styled-components';

import { useDataContext } from '../../contexts/DataContext';

import Room from './Room';
import Inventory from './Inventory';
// import Avatar from './Avatar';

export default function Dashboard() {
	const {
		data: { isLoading },
	} = useDataContext();

	return (
		<BottomWrapper>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<>
					<Room />
					<Inventory />
					{/* <Avatar /> */}
				</>
			)}
		</BottomWrapper>
	);
}

const BottomWrapper = styled.div`
	background-color: #bb1333;
	padding: 1rem 1rem 2rem;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`;
