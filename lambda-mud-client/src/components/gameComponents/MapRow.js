import React from 'react';
import styled from 'styled-components';

import MapCell from './MapCell';

export default function MapRow({ row }) {
	return (
		<StyledRow>
			{row && row.map((cell, index) => <MapCell cell={cell} key={index} />)}
		</StyledRow>
	);
}

const StyledRow = styled.div`
	display: flex;
	width: 100%;
`;
