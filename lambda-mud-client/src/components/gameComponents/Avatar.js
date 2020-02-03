import React from 'react';
import styled from 'styled-components';

export default function Avatar() {
	return (
		<Panel>
			<h3>Avatar</h3>
			<p>BLAH</p>
		</Panel>
	);
}

const Panel = styled.div`
	max-width: 30rem;
	color: white;

	p {
		background-color: white;
		color: black;
	}
`;
