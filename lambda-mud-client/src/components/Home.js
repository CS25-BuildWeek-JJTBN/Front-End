import React from 'react';
import { useHistory } from 'react-router-dom';

import { useUserContext } from '../contexts/UserContext';

import styled from 'styled-components';

export default function Home() {
	const history = useHistory();

	const {
		user: { isLoggedIn },
	} = useUserContext();

	return (
		<HomePageWrapper>
			<div className='homepage-top'>
				<HomePageHeader>
					<HomeLogoText>
						<h2 class='blink'>Welcome to </h2>
						<HomeLogoSmall>
							<h1>the legend of</h1>
						</HomeLogoSmall>
						<HomeLogoLarge>
							<h1>Lambda</h1>
						</HomeLogoLarge>
					</HomeLogoText>
					{isLoggedIn && (
						<h2 class='blink clickable' onClick={() => history.push('/game')}>
							Press Start Button
						</h2>
					)}
					{!isLoggedIn && (
						<h2 class='blink clickable' onClick={() => history.push('/login')}>
							Login/Register To Start
						</h2>
					)}
				</HomePageHeader>

				<div className='blurb'>
					<h2>Experience the challenge of endless coding adventure.</h2>
					<p>
						Welcome to THE LEGEND OF LAMBDA. Where the only sound you'll hear is
						your fingers tapping as you hack through computer networks in an
						attempt to pay off your Lambda ISA. Along the way you'll be
						challenged by a series of Coding Interview Questions. But don't
						despair. With a little luck and a lot of courage, you'll conquer
						your impostor syndrome, hone your technical interview skills, and
						unravel the mystery of THE LEGEND OF LAMBDA!
					</p>
				</div>
			</div>
			<div className='feature-wrapper'>
				<div className='feature-column'>
					<div className='feature-img1 feature-img'></div>
					<div className='feature'>
						<p>Customize your Avatar!</p>
						<p>Add beanies, sunglasses, and other swag!</p>
					</div>
				</div>
				<div className='feature-column'>
					<div className='feature-img2 feature-img'></div>
					<div className='feature'>
						<p>
							Navigate the Lambda world with our clickable Controller or your
							keyboard!
						</p>
					</div>
				</div>
				<div className='feature-column'>
					<div className='feature-img3 feature-img'></div>
					<div className='feature'>
						<p>
							Collect over 90 tough interview questions and the resources to
							crack 'em!
						</p>
					</div>
				</div>
				<div className='testimonial'>
					<div className='testimonial-img'></div>
					<p>
						"Thanks to THE LEGEND OF LAMBDA, I was able to land my dream job at
						LINKedIn!"
					</p>
				</div>
			</div>
		</HomePageWrapper>
	);
}

const HomePageHeader = styled.div`
	position: relative;
	// height: 40rem;
	border: solid 0.4rem #2f2b4a;
	background-color: #f0f4f7;
	// width: 60%;
	width: 90%;
	max-width: 53rem;
	text-align: center;
	margin: 2rem auto;

	@media screen and (max-width: 1350px) {
		width: 45%;
	}

	@media screen and (max-width: 1200px) {
		width: 90%;
	}

	.blink {
		margin: 2rem;
		animation: blinkingText 1.2s infinite;
	}

	@keyframes blinkingText {
		0% {
			color: #000;
		}
		49% {
			color: #000;
		}
		60% {
			color: transparent;
		}
		99% {
			color: transparent;
		}
		100% {
			color: #000;
		}
	}

	.clickable {
		cursor: pointer;
	}
`;

const HomeLogoText = styled.div`
	display: flex;
	flex-direction: column;
`;

const HomeLogoSmall = styled.div`
	font-size: 3rem;
	line-height: 0.5;
	position: relative;
	left: 2rem;
	top: 0.5rem;

	@media screen and (max-width: 600px) {
		font-size: 2.5rem;
	}

	@media screen and (max-width: 500px) {
		font-size: 1.75rem;
	}

	@media screen and (max-width: 400px) {
		font-size: 1.25rem;
	}
`;

const HomeLogoLarge = styled.div`
	font-size: 9rem;
	line-height: 1;
	text-shadow: 0.3rem 0.3rem darkred;

	@media screen and (max-width: 600px) {
		font-size: 7rem;
	}

	@media screen and (max-width: 500px) {
		font-size: 5rem;
	}

	@media screen and (max-width: 400px) {
		font-size: 4rem;
	}
`;

const HomePageWrapper = styled.div`
	.homepage-top {
		display: flex;
		align-items: center;

		@media screen and (max-width: 1200px) {
			flex-direction: column;
		}
	}

	.testimonial {
		width: 30rem;

		font-size: 1.6rem;

		.testimonial-img {
			width: 30rem;
			height: 25rem;
			background-image: url('./photos/link-sprite.png');
			background-size: cover;
			margin-top: 2rem;
		}
	}

	.blurb {
		width: 90%;
		max-width: 65ch;
		margin: 0 auto;

		h2 {
			font-size: 2rem;
		}

		p {
			font-size: 1.4rem;
		}

		@media screen and (max-width: 1350px) {
			width: 45%;

			h2 {
				font-size: 1.6rem;
			}

			p {
				font-size: 1.2rem;
			}
		}

		@media screen and (max-width: 1200px) {
			width: 90%;
		}
	}

	.feature-wrapper {
		width: 90%;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		margin: 0 auto;
		margin-bottom: 3rem;

		@media screen and (max-width: 1300px) {
			flex-wrap: wrap;
		}

		.feature-column {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.feature {
			width: 30rem;
			height: 30rem;
			background-color: #2f2b4a;
			color: white;
			border-radius: 15rem;
			padding: 2rem;

			font-size: 1.6rem;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;

			@media screen and (max-width: 360px) {
				width: 26rem;
				height: 26rem;
				border-radius: 13rem;
				font-size: 1.2rem;
			}
		}
	}

	.feature-img {
		position: relative;
		top: 3rem;
	}

	.feature-img1 {
		background-color: white;
		border: 0.4rem solid #2f2b4a;
		width: 14rem;
		height: 13rem;
		background-image: url('./photos/avatar.png');
		background-size: cover;
	}

	.feature-img2 {
		background-color: white;
		border: 0.4rem solid #2f2b4a;
		width: 23rem;
		height: 13rem;
		background-image: url('./photos/controller.png');
		background-size: cover;
	}

	.feature-img3 {
		background-color: white;
		border: 0.4rem solid #2f2b4a;
		width: 34rem;
		height: 12.5rem;
		background-image: url('./photos/question.png');
		background-size: cover;

		@media screen and (max-width: 380px) {
			width: 26rem;
			height: 9.5rem;
		}
	}
`;
