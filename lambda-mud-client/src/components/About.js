import React from 'react';
import styled from 'styled-components';

import TeamCard from './TeamCard';
import { team_info } from './TeamInfo';

export default function About() {
	return (
		<div>
			<h2>The Team:</h2>
			<TeamWrapper>
				{team_info.map(member => (
					<TeamCard key={member.name} member={member} />
				))}
			</TeamWrapper>
			<div>
				<h2>The Tech Stack:</h2>
				<p>
					THE LEGEND OF LAMBDA is a REACT front-end application built on a
					DJANGO back-end.
				</p>
				<p>
					The front-end was built using AXIOS, REACT ROUTER, & CONTEXT API and
					uses STYLED-COMPONENTS and NES.CSS for styling.
				</p>
			</div>
		</div>
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
