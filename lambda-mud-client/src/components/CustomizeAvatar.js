import React from 'react';
import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

import Avatar from './gameComponents/Avatar';
import Loading from './Loading';
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

import setAttribute from '../utils/setAttribute';

export default function CustomizeAvatar() {
	const {
		data: { has_glasses, glasses_style, isLoading },
		dispatch,
	} = useDataContext();

	const handleClick = (attribute, value, dispatch) =>
		setAttribute(attribute, value, dispatch);

	return (
		<ProfilePanelWrapper>
			<h3>Build Your Avatar!</h3>
			<div className='avatar-background'>
				<Avatar />
			</div>
			{isLoading && <Loading />}
			<div className='color-row color-row-first'>
				<h4>Eye Color: </h4>
				<div className='colors'>
					{eyeColors.map(color => (
						<ColorSwatch
							key={color}
							color={color}
							handleClick={() => handleClick('pupil_color', color, dispatch)}
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
							handleClick={() => handleClick('skin_tone', color, dispatch)}
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
							handleClick={() => handleClick('hoodie_color', color, dispatch)}
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
							handleClick={() => handleClick('pants_color', color, dispatch)}
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
							handleClick={() => handleClick('shoe_color', color, dispatch)}
						/>
					))}
				</div>
			</div>
			<div className='color-row'>
				<h4>Glasses?</h4>
				<div className='check-boxes'>
					<Checkbox
						onClick={() => handleClick('has_glasses', true)}
						trueValue={has_glasses}
					/>{' '}
					Yes{' '}
					<Checkbox
						onClick={() => {
							handleClick('has_glasses', false);
							handleClick('glasses_style', '');
						}}
						trueValue={!has_glasses}
					/>{' '}
					No
				</div>
			</div>
			{has_glasses && (
				<>
					<div className='color-row'>
						<h4>Shape:</h4>
						<div>
							<Checkbox
								onClick={() => handleClick('glasses_style', 'round', dispatch)}
								trueValue={glasses_style === 'round'}
							/>
							<RoundLens />
							<RoundLens />
							<Checkbox
								onClick={() => handleClick('glasses_style', 'square', dispatch)}
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
									handleClick={() =>
										handleClick('glasses_color', color, dispatch)
									}
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
