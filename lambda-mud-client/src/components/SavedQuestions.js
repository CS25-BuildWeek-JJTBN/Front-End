import React from 'react';
import styled from 'styled-components';

export default function SavedQuestions() {
	return (
		<SavedWrapper>
			<h3>Saved Questions: </h3>
			{/* <ul></ul> */}
		</SavedWrapper>
	);
}

const SavedWrapper = styled.div`
	width: 30rem;
	margin: 3rem auto;
	display: flex;
`;
