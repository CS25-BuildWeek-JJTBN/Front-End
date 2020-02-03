import React from 'react';
import styled from 'styled-components';

import { useDataContext } from '../../contexts/DataContext';

export default function PlayerBar() {
	const {
		data: { isLoading, name },
	} = useDataContext();

	return (
		<DashBar>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<>
					<h3>
						Player: <Normal>{name}</Normal>
					</h3>
					<div>**DASHBOARD STATS**</div>
				</>
			)}
		</DashBar>
	);
}

const DashBar = styled.div`
	padding: 1rem;
	background-color: #2f2b4a;
	display: flex;
	justify-content: space-between;

	color: white;
`;

const Normal = styled.span`
	font-weight: normal;
`;
