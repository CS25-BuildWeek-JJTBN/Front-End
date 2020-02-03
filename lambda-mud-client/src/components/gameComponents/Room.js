import React from 'react';
import styled from 'styled-components';

import { useDataContext } from '../../contexts/DataContext';

export default function Room() {
	const {
		data: { title, description },
	} = useDataContext();

	return (
		<Panel>
			<h3>
				Room:
				<Normal>{title}</Normal>
			</h3>
			<p>{description}</p>
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

const Normal = styled.span`
	font-weight: normal;
`;
