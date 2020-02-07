import React from 'react';
import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

export default function SavedQuestions() {
	const {
		data: { visitedRooms },
	} = useDataContext();

	return (
		<SavedWrapper>
			<h3>Saved Questions: </h3>
			<div className='questions-box'>
				{visitedRooms &&
					visitedRooms
						.filter(
							content =>
								content.title !== 'No question. Just an empty hallway.',
						)
						.map(content => (
							<div className='question' key={content.id}>
								<a
									href={content.description}
									target='_blank'
									rel='noopener noreferrer'>
									{content.title}
								</a>
							</div>
						))}
			</div>
		</SavedWrapper>
	);
}

const SavedWrapper = styled.div`
	// width: 30%;
	max-width: 65ch;
	margin: 2rem 0;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 700px) {
		width: 90%;
	}

	h3 {
		text-transform: uppercase;
	}

	.questions-box {
		border: 0.2rem solid black;
	}

	.question {
		background-color: white;
		border: 0.2rem solid black;
		padding: 1rem;
	}
`;
