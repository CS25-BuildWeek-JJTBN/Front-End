import React from 'react';
import styled from 'styled-components';

import { letter_data } from './LetterData';

export default function LetterBox({ handleLetter }) {
	return (
		<LetterSelect>
			{letter_data.map(letter => (
				<div key={letter} onClick={() => handleLetter(letter)}>
					<h2>{letter}</h2>
				</div>
			))}
		</LetterSelect>
	);
}

const LetterSelect = styled.div`
	border: solid 4px #2f2b4a;
	background-color: #f0f4f7;
	// height: 28rem;
	width: 55rem;
	display: flex;
	flex-wrap: wrap;

	h2 {
		display: flex;
		padding: 1rem;
		color: #bb1333;
		cursor: pointer;
		&:hover {
			background-color: #9d96ca;
			color: white;
			border-radius: 20%;
		}
	}
`;
