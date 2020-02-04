import React from 'react';
import styled from 'styled-components';

import Question from './Question';
import Resource from './Resource';
import Inventory from './Inventory';

export default function Dashboard() {
	return (
		<BottomWrapper>
			<Question />
			<Resource />
			<Inventory />
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
