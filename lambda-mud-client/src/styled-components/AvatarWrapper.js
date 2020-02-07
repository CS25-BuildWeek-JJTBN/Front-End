import styled from 'styled-components';

export const AvatarContainer = styled.div`
	width: 9.2rem;
	height: 14rem;
	// background-color: rgba(255, 255, 255, 0.5);
	// border-radius: 1rem;

	// box-shadow: 0.3rem 0.2rem rgba(0, 0, 0, 0.25),
	// 	inset 0.3rem 0.2rem rgba(255, 255, 255, 0.25);

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const AvatarWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	position: relative;
	top: ${props => props.avatarShift};

	.glasses {
		display: flex;

		position: relative;
		top: ${props => props.glassesShift};
		z-index: 1015;

		.lens {
			background-color: ${props => props.data.lensColor};
			width: 2rem;
			height: 2rem;
			border-radius: ${props =>
				props.data.glasses_style === 'round' ? '1rem' : '0'};
			border: 3px solid ${props => props.data.glasses_color};
		}
	}

	.headphones {
		display: flex;

		position: relative;
		top: ${props => props.headphonesShift};
		z-index: 1010;

		.headphone {
			background-color: ${props => props.data.headPhoneColor};
			width: 1rem;
			height: 3rem;

			position: relative;
			top: 3rem;
		}

		.headphone-band {
			width: 7rem;
			height: 3.5rem;
			border-radius: 3.5rem 3.5rem 0 0;
			border-left: 2px solid ${props => props.data.headPhoneColor};
			border-top: 3px solid ${props => props.data.headPhoneColor};
			border-right: 2px solid ${props => props.data.headPhoneColor};
		}
	}

	.hat {
		display: flex;
		flex-direction: column;
		align-items: center;

		position: relative;
		top: 3rem;
		z-index: 1000;

		.hat-top {
			background-color: ${props => props.data.hatColor};
			width: 6rem;
			height: 3rem;
			border-radius: 3rem 3rem 0 0;

			box-shadow: inset 0 0.1rem 0.5rem rgba(0, 0, 0, 0.5);

			position: relative;
			top: 1rem;
		}

		.hat-band {
			background-color: ${props => props.data.hatBandColor};
			width: 6.75rem;
			height: 2rem;
			border-radius: 0.3rem;
			box-shadow: inset 0 -0.1rem 0.4rem rgba(0, 0, 0, 0.5);

			z-index: 1005;
		}
	}

	.hoodie {
		background-color: ${props => props.data.hoodie_color};
		width: 7.5rem;
		height: 7.5rem;
		border-radius: 3.75rem;

		display: flex;
		justify-content: center;
		align-items: center;

		box-shadow: inset 0 -0.1rem 0.5rem rgba(0, 0, 0, 0.5);

		.head {
			background-color: ${props => props.data.skin_tone};
			width: 5rem;
			height: 5rem;
			border-radius: 2.5rem;
			z-index: 995;

			display: flex;
			justify-content: center;
			align-items: center;

			box-shadow: inset 0 -0.1rem 0.5rem rgba(0, 0, 0, 0.5);
		}
	}

	.eyes,
	.shoes {
		display: flex;
	}

	.eye {
		background-color: white;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 0.75rem;
		margin: 0 0.1rem;

		display: flex;
		justify-content: flex-end;
		align-items: center;

		.pupil {
			background-color: ${props => props.data.pupil_color};
			width: 0.5rem;
			height: 0.5rem;
			border-radius: 0.25rem;
		}
	}

	.hands {
		display: flex;
		justify-content: space-between;

		position: relative;
		bottom: 3.5rem;

		.hand {
			background-color: ${props => props.data.skin_tone};
			width: 1.5rem;
			height: 1.5rem;
			border-radius: 0.75rem;
			box-shadow: inset 0 -0.1rem 0.3rem rgba(0, 0, 0, 0.5);
		}
	}

	.torso {
		position: relative;
		bottom: 2rem;

		.shirt {
			background-color: ${props => props.data.hoodie_color};
			width: 6rem;
			height: 3rem;
			border-radius: 3rem 3rem 0 0;
		}

		.pants {
			background-color: ${props => props.data.pants_color};
			width: 6rem;
			height: 2rem;
		}

		.shoe {
			background-color: ${props => props.data.shoe_color};
			width: 3rem;
			height: 1rem;
			border-radius: 0 0 1rem 1rem;
			z-index: 10;
			box-shadow: 0 0 1rem 0.25rem black;
		}
	}
`;
