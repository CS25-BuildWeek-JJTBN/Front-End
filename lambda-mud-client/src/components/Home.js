import React, { useEffect } from 'react';
import Logo from './Logo';

import { useUserContext } from '../contexts/UserContext';

import styled from 'styled-components';

export default function Home() {
	const { user, dispatch } = useUserContext();

	useEffect(() => {
		if (localStorage.getItem('token')) {
		dispatch({ type: 'LOGIN_TRUE' });
	}
}, [dispatch]);

	return <HomePage>
		<HomeLogoText>
			<h2 class='blink'>Welcome to </h2>
			<HomeLogoSmall>
				<h1>the legend of</h1>
			</HomeLogoSmall>
			<HomeLogoLarge>
				<h1>Lambda</h1>
			</HomeLogoLarge>
		</HomeLogoText>
		{user.isLoggedIn && <h2 class='blink'> Press Start Button</h2>}
		{!user.isLoggedIn && <h2 class='blink'> Login / Register To Start</h2>}
	</HomePage>;
}

const HomePage = styled.div`
	position: relative;
	height: 40rem;
	border: solid 4px #2f2b4a;
	width: 60%;
	text-align: center;
	margin: auto;
	.blink{
		margin: 2rem;
		animation: blinkingText 1.2s infinite;

	}
	@keyframes blinkingText{
		0%{     color: #000;    }
		49%{    color: #000; }
		60%{    color: transparent; }
		99%{    color:transparent;  }
		100%{   color: #000;    }
	}
`;


const HomeLogoText = styled.div`
	display: flex;
	flex-direction: column;
`;

const HomeLogoSmall = styled.div`
	font-size: 3.7rem;
	line-height: 1;
	position: relative;
	left: 3rem;
	top: 0.5rem;
`;

const HomeLogoLarge = styled.div`
	font-size: 10rem;
	line-height: 1;
	text-shadow: 0.3rem 0.3rem darkred;
`;