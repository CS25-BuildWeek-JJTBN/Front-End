import React from 'react';
import styled from 'styled-components';

// import Avatar from './Avatar';
import Controls from './Controls';
import Question from './Question';
import Resource from './Resource';
import Inventory from './Inventory';

export default function Dashboard() {
	return (
		<BottomWrapper>
			<div className='floating-items'>
				{/* <Avatar /> */}
				<Controls />
			</div>
			<div className='bottom-panels'>
				<Question />
				<Resource />
				<Inventory />
			</div>
		</BottomWrapper>
	);
}

const BottomWrapper = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;

	.floating-items {
		display: flex;
		// justify-content: space-between;
		justify-content: flex-end;
		padding: 1rem 3rem;
	}

	.bottom-panels {
		background-color: #bb1333;
		padding: 1rem 1rem 2rem;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
`;
