import React from 'react';
import styled from 'styled-components';

import { useUserContext } from '../../contexts/UserContext';

import MapCell from './MapCell';
import MapCellHard from './MapCellHard';

export default function MapRow({ row }) {
	const {
		user: { hardMode },
	} = useUserContext();

	return (
		<StyledRow>
			{row &&
				row.map((cell, index) =>
					hardMode ? (
						<MapCellHard cell={cell} key={index} />
					) : (
						<MapCell cell={cell} key={index} />
					),
				)}
		</StyledRow>
	);
}

const StyledRow = styled.div`
	display: flex;
	width: 100%;
`;
