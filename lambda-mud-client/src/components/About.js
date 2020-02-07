import React from 'react';
import styled from 'styled-components';

import TeamCard from './TeamCard';
import { team_info } from './TeamInfo';

export default function About() {
	return (
		<AboutPage>
			<div>
				<h2>The Tech Stack:</h2>
				<div className='tech-stack-txt'>
					<p>
						<span className='red-text'>THE LEGEND OF LAMBDA</span> is a{' '}
						<span className='red-text'>REACT</span> front-end application built
						on a <span className='red-text'>DJANGO</span> back-end.
					</p>
					<p>
						The front-end was built using{' '}
						<span className='red-text'>REACT ROUTER</span>,{' '}
						<span className='red-text'>AXIOS</span> for data fetching,{' '}
						<span className='red-text'>CONTEXT API</span> for state management,{' '}
						<span className='red-text'>STYLED-COMPONENTS</span> and{' '}
						<span className='red-text'>NES.CSS</span> for styling, and{' '}
						<span className='red-text'>PUSHER-JS</span> for chat functionality.
					</p>
				</div>
			</div>
			<div>
				<h2>The Team:</h2>
				<TeamWrapper>
					{team_info.map(member => (
						<TeamCard key={member.name} member={member} />
					))}
				</TeamWrapper>
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

	.red-text {
		color: #bb1333;
	}

	.tech-stack-txt {
		width: 90%;
		max-width: 65ch;
		margin: 1rem auto;
		color: #2f2b4a;
		font-size: 1.6rem;
		margin-bottom: 3rem;
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
