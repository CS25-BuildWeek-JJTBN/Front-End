import React from 'react';
import styled from 'styled-components';

import TeamCard from './TeamCard';
import { team_info } from './TeamInfo';

export default function About() {
	return (
		<TeamWrapper>
			{team_info.map(member => (
				<TeamCard key={member.name} member={member} />
			))}
		</TeamWrapper>
	);
}

const TeamWrapper = styled.div`
	padding-top: 2rem;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	margin: 0 auto;
`;
