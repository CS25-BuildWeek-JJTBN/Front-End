import React from 'react';
import styled from 'styled-components';

export default function ControlsButtons() {
	return (
		<ControlsButtonsWrapper>
			<RoundButtonXY>X</RoundButtonXY>
			<div className='round-buttons-row'>
				<RoundButtonXY>Y</RoundButtonXY>
				<RoundButtonAB>P</RoundButtonAB>
			</div>
			<RoundButtonAB>D</RoundButtonAB>
		</ControlsButtonsWrapper>
	);
}

const ControlsButtonsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 9rem;

	.round-buttons-row {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
`;

const RoundButtonXY = styled.button`
	width: 3.2rem;
	height: 3.2rem;
	border-radius: 1.6rem;
	border: none;
	letter-spacing: 0;
	text-align: center;
	cursor: default;

	background-color: #baa9cb;
	color: #7d35d5;
	box-shadow: 0 0 1rem black, inset -0.3rem -0.2rem 0.3rem rgba(0, 0, 0, 0.25),
		inset 0.3rem 0.2rem 0.3rem rgba(255, 255, 255, 0.25);

	&:hover {
		box-shadow: 0 0 1rem yellow,
			inset -0.3rem -0.2rem 0.3rem rgba(0, 0, 0, 0.25),
			inset 0.3rem 0.2rem 0.3rem rgba(255, 255, 255, 0.25);
		color: white;
	}
`;

const RoundButtonAB = styled(RoundButtonXY)`
	background-color: #7d35d5;
	color: #baa9cb;
	cursor: pointer;
`;
