import React from 'react';
import styled from 'styled-components';

export default function Logo() {
	return (
		<LogoText>
			<LogoSmall>
				<h1>the legend of</h1>
			</LogoSmall>
			<LogoLarge>
				<h1>Lambda</h1>
			</LogoLarge>
		</LogoText>
	);
}

const LogoText = styled.div`
	display: flex;
	flex-direction: column;
`;

const LogoSmall = styled.div`
	font-size: 0.7rem;
	line-height: 1;
	position: relative;
	left: 3rem;
	top: 0.5rem;
`;

const LogoLarge = styled.div`
	font-size: 2.4rem;
	line-height: 1;
	text-shadow: 0.3rem 0.3rem darkred;
`;
