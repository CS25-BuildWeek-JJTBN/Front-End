import styled from 'styled-components';

export const AvatarContainer = styled.div`
	width: 10rem;
	height: 15rem;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const AvatarWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.headphones {
		display: flex;

		position: relative;
		top: ${props => props.headphonesShift};
		z-index: 1010;

		.headphone {
			background-color: ${props => props.avatarColors.headPhoneColor};
			width: 1rem;
			height: 3rem;

			position: relative;
			top: 3rem;
		}

		.headphone-band {
			width: 7rem;
			height: 3.5rem;
			border-radius: 3.5rem 3.5rem 0 0;
			border-left: 2px solid ${props => props.avatarColors.headPhoneColor};
			border-top: 3px solid ${props => props.avatarColors.headPhoneColor};
			border-right: 2px solid ${props => props.avatarColors.headPhoneColor};
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
			background-color: ${props => props.avatarColors.hatColor};
			width: 6rem;
			height: 3rem;
			border-radius: 3rem 3rem 0 0;

			position: relative;
			top: 1rem;
		}

		.hat-band {
			background-color: ${props => props.avatarColors.hatBandColor};
			width: 6.75rem;
			height: 2rem;
			border-radius: 0.5rem;
			z-index: 1005;
		}
	}

	.hoodie {
		background-color: ${props => props.avatarColors.hoodieColor};
		width: 7.5rem;
		height: 7.5rem;
		border-radius: 3.75rem;

		display: flex;
		justify-content: center;
		align-items: center;

		.head {
			background-color: ${props => props.avatarColors.skinTone};
			width: 5.5rem;
			height: 5.5rem;
			border-radius: 2.75rem;
			z-index: 995;

			display: flex;
			justify-content: center;
			align-items: center;
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
			background-color: ${props => props.avatarColors.pupilColor};
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
			background-color: ${props => props.avatarColors.skinTone};
			width: 1.5rem;
			height: 1.5rem;
			border-radius: 0.75rem;
		}
	}

	.torso {
		position: relative;
		bottom: 2rem;

		.shirt {
			background-color: ${props => props.avatarColors.hoodieColor};
			width: 6rem;
			height: 3rem;
			border-radius: 3rem 3rem 0 0;
		}

		.pants {
			background-color: ${props => props.avatarColors.pantsColor};
			width: 6rem;
			height: 2rem;
		}

		.shoe {
			background-color: ${props => props.avatarColors.shoeColor};
			width: 3rem;
			height: 1rem;
			border-radius: 0 0 1rem 1rem;
		}
	}
`;
