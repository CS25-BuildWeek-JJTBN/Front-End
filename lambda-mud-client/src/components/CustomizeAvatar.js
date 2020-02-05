import React, { useState } from 'react';
import styled from 'styled-components';

import Avatar from './gameComponents/Avatar';
import ColorSwatch from './gameComponents/ColorSwatch';
import {
	eyeColors,
	skinTones,
	hoodieColors,
	pantsColors,
	shoesColors,
	glassesColors,
} from './gameComponents/AvatarColors';

export default function CustomizeAvatar() {
	const [hasGlasses, setHasGlasses] = useState(false);
	const [glassesShape, setGlassesShape] = useState('');

	return (
		<CustomizeWrapper>
			<h3>Build Your Avatar!</h3>
			<div className='avatar-background'>
				<Avatar />
			</div>
			<div className='color-row color-row-first'>
				<h4>Eye Color: </h4>
				<div className='colors'>
					{eyeColors.map(color => (
						<ColorSwatch key={color} color={color} />
					))}
				</div>
			</div>
			<div className='color-row'>
				<h4>Skin Tone: </h4>
				<div className='colors'>
					{skinTones.map(color => (
						<ColorSwatch key={color} color={color} />
					))}
				</div>
			</div>
			<div className='color-row'>
				<h4>Hoodie: </h4>
				<div className='colors'>
					{hoodieColors.map(color => (
						<ColorSwatch key={color} color={color} />
					))}
				</div>
			</div>
			<div className='color-row'>
				<h4>Pants: </h4>
				<div className='colors'>
					{pantsColors.map(color => (
						<ColorSwatch key={color} color={color} />
					))}
				</div>
			</div>
			<div className='color-row'>
				<h4>Shoes: </h4>
				<div className='colors'>
					{shoesColors.map(color => (
						<ColorSwatch key={color} color={color} />
					))}
				</div>
			</div>
			<div className='color-row'>
				<h4>Glasses?</h4>
				<div className='check-glasses'>
					<Checkbox
						onClick={() => setHasGlasses(true)}
						trueValue={hasGlasses}
					/>{' '}
					Yes{' '}
					<Checkbox
						onClick={() => {
							setHasGlasses(false);
							setGlassesShape('');
						}}
						trueValue={!hasGlasses}
					/>{' '}
					No
				</div>
			</div>
			{hasGlasses && (
				<>
					<div className='color-row'>
						<h4>Shape:</h4>
						<div>
							<Checkbox
								onClick={() => setGlassesShape('round')}
								trueValue={glassesShape === 'round'}
							/>
							<RoundLens />
							<RoundLens />
							<Checkbox
								onClick={() => setGlassesShape('square')}
								trueValue={glassesShape === 'square'}
							/>
							<SquareLens />
							<SquareLens />
						</div>
					</div>
					<div className='color-row'>
						<h4>Frame: </h4>
						<div className='colors'>
							{glassesColors.map(color => (
								<ColorSwatch key={color} color={color} />
							))}
						</div>
					</div>
				</>
			)}
		</CustomizeWrapper>
	);
}

const CustomizeWrapper = styled.div`
	display: flex;
	flex-direction: column;

	width: 40%;
	min-width: 30rem;
	margin: 2rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;

	// background-color: rgba(255, 255, 255, 0.5);
	// box-shadow: 0.3rem 0.2rem rgba(0, 0, 0, 0.25);
	// border-radius: 1rem;

	background-color: white;
	border: 0.5rem solid black;

	@media screen and (max-width: 700px) {
		width: 90%;
	}

	.avatar-background {
		background-color: lightblue;
		border-radius: 1rem;
		box-shadow: 0.3rem 0.2rem lightblue;
	}

	h3 {
		margin-bottom: 2rem;
		text-transform: uppercase;
	}

	.color-row {
		margin: 0.5rem 0;

		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;

		h4 {
			margin-bottom: 0;
		}

		.colors {
			display: flex;
		}
	}

	.color-row-first {
		margin-top: 2rem;
	}

	.check-glasses {
		display: flex;
		align-items: center;
	}
`;

const Checkbox = styled.span`
	display: inline-block;
	background-color: ${props => props.trueValue && 'silver'};
	width: 2rem;
	height: 2rem;
	border-radius: 0.3rem;
	margin: 0 1rem;
	cursor: pointer;
	border: 2px solid silver;
`;

const SquareLens = styled.span`
	display: inline-block;
	width: 2rem;
	height: 2rem;
	border: 2px solid black;
`;

const RoundLens = styled(SquareLens)`
	border-radius: 1rem;
`;
