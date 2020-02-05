import React from 'react';
import styled from 'styled-components';

import TeamCard from './TeamCard';
import { team_info } from './TeamInfo';

export default function About() {
	return (
		<AboutPage>
			<h2>The Team:</h2>
			<TeamWrapper>
				{team_info.map(member => (
					<TeamCard key={member.name} member={member} />
				))}
			</TeamWrapper>
			<div>
				<h2>The Tech Stack:</h2>
				<div className='tech-stack-txt'>
					<p>
						THE LEGEND OF LAMBDA is a REACT front-end application built on a
						DJANGO back-end.
					</p>
					<p>
						The front-end was built using REACT ROUTER, AXIOS for data fetching,
						CONTEXT API for state management, & STYLED-COMPONENTS and NES.CSS
						for styling.
					</p>
				</div>
			</div>
		</AboutPage>
	);
}

const AboutPage = styled.div`
	h2 {
		color: #bb1333;
		text-align: center;
		margin-top: 2rem;
		font-size: 2rem;
	}

	.tech-stack-txt {
		width: 90%;
		max-width: 65ch;
		margin: 1rem auto;
		color: #2f2b4a;
		font-size: 1.6rem;
	}
`;

const TeamWrapper = styled.div`
	padding-top: 2rem;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	margin: 0 auto;

	h2 {
		color: black;
	}
`;
