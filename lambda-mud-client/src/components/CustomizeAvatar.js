import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

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
import {
	ProfilePanelWrapper,
	Checkbox,
} from '../styled-components/styledComponents';

export default function CustomizeAvatar() {
	const {
		data: {
			hasGlasses,
			glasses_style,
			skin_tone,
			pupil_color,
			hoodie_color,
			pants_color,
			shoe_color,
			glasses_color,
		},
		dispatch,
	} = useDataContext();

	const handleClick = (attribute, value) => {
		dispatch({ type: 'SET_ATTRIBUTE', payload: { attribute, value } });

		const body = {
			skin_tone,
			pupil_color,
			hoodie_color,
			pants_color,
			shoe_color,
			glasses_color,
			glasses_style,
		};

		console.log({ body });

		axiosWithAuth()
			.get('/adv/player-update/', body)
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<ProfilePanelWrapper>
			<h3>Build Your Avatar!</h3>
			<div className='avatar-background'>
				<Avatar />
			</div>
			<div className='color-row color-row-first'>
				<h4>Eye Color: </h4>
				<div className='colors'>
					{eyeColors.map(color => (
						<ColorSwatch
							key={color}
							color={color}
							handleClick={() => handleClick('pupil_color', color)}
						/>
					))}
				</div>
			</div>
			<div className='color-row'>
				<h4>Skin Tone: </h4>
				<div className='colors'>
					{skinTones.map(color => (
						<ColorSwatch
							key={color}
							color={color}
							handleClick={() => handleClick('skin_tone', color)}
						/>
					))}
				</div>
			</div>
			<div className='color-row'>
				<h4>Hoodie: </h4>
				<div className='colors'>
					{hoodieColors.map(color => (
						<ColorSwatch
							key={color}
							color={color}
							handleClick={() => handleClick('hoodie_color', color)}
						/>
					))}
				</div>
			</div>
			<div className='color-row'>
				<h4>Pants: </h4>
				<div className='colors'>
					{pantsColors.map(color => (
						<ColorSwatch
							key={color}
							color={color}
							handleClick={() => handleClick('pants_color', color)}
						/>
					))}
				</div>
			</div>
			<div className='color-row'>
				<h4>Shoes: </h4>
				<div className='colors'>
					{shoesColors.map(color => (
						<ColorSwatch
							key={color}
							color={color}
							handleClick={() => handleClick('shoe_color', color)}
						/>
					))}
				</div>
			</div>
			<div className='color-row'>
				<h4>Glasses?</h4>
				<div className='check-boxes'>
					<Checkbox
						onClick={() => handleClick('hasGlasses', true)}
						trueValue={hasGlasses}
					/>{' '}
					Yes{' '}
					<Checkbox
						onClick={() => {
							handleClick('hasGlasses', false);
							handleClick('glassesStyle', '');
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
								onClick={() => handleClick('glasses_style', 'round')}
								trueValue={glasses_style === 'round'}
							/>
							<RoundLens />
							<RoundLens />
							<Checkbox
								onClick={() => handleClick('glasses_style', 'square')}
								trueValue={glasses_style === 'square'}
							/>
							<SquareLens />
							<SquareLens />
						</div>
					</div>
					<div className='color-row'>
						<h4>Frame: </h4>
						<div className='colors'>
							{glassesColors.map(color => (
								<ColorSwatch
									key={color}
									color={color}
									handleClick={() => handleClick('glasses_color', color)}
								/>
							))}
						</div>
					</div>
				</>
			)}
		</ProfilePanelWrapper>
	);
}

const SquareLens = styled.span`
	display: inline-block;
	width: 2rem;
	height: 2rem;
	border: 2px solid black;
`;

const RoundLens = styled(SquareLens)`
	border-radius: 1rem;
`;
