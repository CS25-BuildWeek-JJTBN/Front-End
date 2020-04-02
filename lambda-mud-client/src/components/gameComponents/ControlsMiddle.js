import React from 'react';
import styled from 'styled-components';

export default function ControlsMiddle() {
	return (
		<ControlsMiddleWrapper>
			<FlatButton>SELECT</FlatButton>
			<FlatButton>START</FlatButton>
		</ControlsMiddleWrapper>
	);
}

const ControlsMiddleWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const FlatButton = styled.button`
	background-color: gray;
	color: silver;
	border: none;
	font-size: 0.5rem;
	height: 1.25rem;
	width: 4.5rem;
	border-radius: 0.6rem;
	transform: rotate(-35deg);
	letter-spacing: 0;
	cursor: pointer;
	box-shadow: 0 0 1rem black, inset -0.3rem -0.2rem 0.3rem rgba(0, 0, 0, 0.25),
		inset 0.3rem 0.2rem 0.3rem rgba(255, 255, 255, 0.25);

	&:hover {
		color: white;
		box-shadow: 0 0 1rem yellow,
			inset -0.3rem -0.2rem 0.3rem rgba(0, 0, 0, 0.25),
			inset 0.3rem 0.2rem 0.3rem rgba(255, 255, 255, 0.25);
	}
`;
