import React from 'react';
import styled from 'styled-components';

export default function Inventory() {
	return (
		<Panel>
			<h3>Inventory</h3>
			<p>**BLAH**</p>
		</Panel>
	);
}

const Panel = styled.div`
	max-width: 30rem;
	color: white;

	p {
		background-color: white;
		color: black;

		margin-top: 1rem;
		border-radius: 1rem;
		padding: 1rem;
	}
`;
