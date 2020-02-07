import React from 'react';
import styled from 'styled-components';

export default function TeamCard({ member }) {
	const image = `url('/photos/` + member.img_path + `')`;

	return (
		<StyledCard>
			<StyledImage image={image} />
			<h2>{member.role.toUpperCase()}</h2>
			<div>
				<p>{member.bio.toUpperCase()}</p>
				<h3>{member.name.toUpperCase()}</h3>
			</div>
			<div className='about-icons'>
				{member.webpage_url && (
					<i className='nes-icon trophy is-medium'>
						<a
							href={member.webpage_url}
							target='_blank'
							rel='noopener noreferrer'></a>
					</i>
				)}
				{member.linkedin_url && (
					<i className='nes-icon linkedin is-medium'>
						<a
							href={member.linkedin_url}
							target='_blank'
							rel='noopener noreferrer'></a>
					</i>
				)}
				{member.github_url && (
					<i className='nes-icon github is-medium'>
						<a
							href={member.github_url}
							target='_blank'
							rel='noopener noreferrer'></a>
					</i>
				)}
				{member.twitter_url && (
					<i className='nes-icon twitter is-medium'>
						<a
							href={member.twitter_url}
							target='_blank'
							rel='noopener noreferrer'></a>
					</i>
				)}
			</div>
		</StyledCard>
	);
}

const StyledCard = styled.div`
	border: solid black 0.4rem;
	width: 30rem;
	margin-bottom: 2rem;
	padding: 1rem;
	background-color: #f0f4f7;

	display: flex;
	flex-direction: column;

	.about-icons {
		margin-top: 1rem;
		display: flex;
		justify-content: space-evenly;
		flex: 1;
		align-items: flex-end;
	}
`;

const StyledImage = styled.div`
	width: 27rem;
	height: 27rem;
	margin: 0 auto;

	background-image: ${props => props.image};
	background-size: cover;
	margin-bottom: 1rem;
`;
