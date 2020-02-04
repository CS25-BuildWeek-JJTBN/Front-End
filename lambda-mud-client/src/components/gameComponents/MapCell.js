import React from 'react';
import styled from 'styled-components';

import { useDataContext } from '../../contexts/DataContext';

export default function MapCell({ cell }) {
	const {
		data: { currentRoom },
	} = useDataContext();

	const isCurrentRoom = currentRoom === cell.id ? true : false;

	return (
		<StyledWrapper>
			{cell.id && (
				<StyledCell
					n={cell.n_to}
					s={cell.s_to}
					e={cell.e_to}
					w={cell.w_to}
					isCurrentRoom={isCurrentRoom}>
					{cell.id}
				</StyledCell>
			)}
		</StyledWrapper>
	);
}

const StyledWrapper = styled.div`
	width: 100%;
	// padding: 0.3rem;
`;

const StyledCell = styled.div`
	width: 100%;
	height: 5rem;

	background-color: ${props => (props.isCurrentRoom ? 'yellow' : 'pink')};

	display: flex;
	justify-content: center;
	align-items: center;

	border-top: 2px ${props => (props.n ? 'none' : 'solid')} black;
	border-right: 2px ${props => (props.e ? 'none' : 'solid')} black;
	border-bottom: 2px ${props => (props.s ? 'none' : 'solid')} black;
	border-left: 2px ${props => (props.w ? 'none' : 'solid')} black;
`;
