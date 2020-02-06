import React from 'react';
import styled from 'styled-components';

import { useDataContext } from '../../contexts/DataContext';

import Controls from './Controls';
import Question from './Question';
import Resource from './Resource';
import Items from './Items';
import Inventory from './Inventory';
import Loading from '../Loading';

export default function Dashboard() {
	const {
		data: { isLoading, error_msg },
	} = useDataContext();

	return (
		<BottomWrapper>
			<div className='floating-items'>
				<Controls />
			</div>
			<div className='dash-bottom'>
				<div className='status-row'>
					<h4>{error_msg}</h4>
					{isLoading && <Loading />}
				</div>
				<div className='bottom-panels'>
					<Question />
					<Resource />
					<Items />
					<Inventory />
				</div>
			</div>
		</BottomWrapper>
	);
}

const BottomWrapper = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	z-index: 1200;

	.floating-items {
		display: flex;
		// justify-content: space-between;
		justify-content: flex-start;
		padding: 1rem 3rem;
	}

	.dash-bottom {
		// background-color: #bb1333;

		.status-row {
			height: 4rem;
			color: #bb1333;
			padding: 1rem 0;
			display: flex;
			justify-content: center;
		}

		.bottom-panels {
			background-color: #bb1333;
			padding: 1rem 1rem 2rem;
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
		}
	}
`;
