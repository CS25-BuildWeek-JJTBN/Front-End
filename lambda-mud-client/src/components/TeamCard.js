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
            <i className="nes-icon linkedin is-medium" >
			<a href={member.link_url} target='_blank'>
			</a></i>
		</StyledCard>
	);
}

const StyledCard = styled.div`
	border: solid black 0.4rem;
	width: 30rem;
	margin-bottom: 2rem;
	padding: 1rem;
	background-color: #f0f4f7;
`;

const StyledImage = styled.div`
	width: 27rem;
	height: 27rem;
	margin: 0 auto;

	background-image: ${props => props.image};
	background-size: cover;
	margin-bottom: 1rem;
`;
