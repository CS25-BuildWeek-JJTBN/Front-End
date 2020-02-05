import React from 'react';
import styled from 'styled-components';

export default function ColorSwatch({ color }) {
	return <Swatch color={color}></Swatch>;
}

const Swatch = styled.div`
	background-color: ${props => props.color};
	width: 2rem;
	height: 2rem;
	border-radius: 0.3rem;
	margin-left: 1rem;
	cursor: pointer;

	border: 2px solid ${props => (props.color === 'white' ? 'silver' : 'none')};

	&:hover {
		border: 2px solid ${props => (props.color !== 'red' ? 'red' : 'black')};
	}
`;
