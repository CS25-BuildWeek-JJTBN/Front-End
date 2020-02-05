import React from 'react';

import {
	AvatarContainer,
	AvatarWrapper,
} from '../../styled-components/AvatarWrapper';

export default function Avatar() {
	const avatarColors = {
		headPhoneColor: 'black',
		hatColor: 'orange',
		hatBandColor: 'red',
		skinTone: '#e0ac69',
		pupilColor: 'black',
		hoodieColor: 'gray',
		pantsColor: 'darkblue',
		shoeColor: 'white',
		lensColor: '',
	};

	const accessoriesStatus = {
		headphones: true,
		hat: true,
		roundGlasses: false,
		squareGlasses: false,
	};

	const headphonesShift = accessoriesStatus.hat ? '7rem' : '2.75rem';

	return (
		<AvatarContainer>
			<AvatarWrapper
				headphonesShift={headphonesShift}
				avatarColors={avatarColors}>
				{accessoriesStatus.roundGlasses && (
					<div className='round-glasses'>
						<div className='round-lens'></div>
						<div className='round-lens'></div>
					</div>
				)}
				{accessoriesStatus.squareGlasses && (
					<div className='square-glasses'>
						<div className='square-lens'></div>
						<div className='square-lens'></div>
					</div>
				)}
				{accessoriesStatus.headphones && (
					<div className='headphones'>
						<div className='headphone'></div>
						<div className='headphone-band'></div>
						<div className='headphone'></div>
					</div>
				)}
				{accessoriesStatus.hat && (
					<div className='hat'>
						<div className='hat-top'></div>
						<div className='hat-band'></div>
					</div>
				)}
				<div className='hoodie'>
					<div className='head'>
						<div className='eyes'>
							<div className='eye'>
								<div className='pupil'></div>
							</div>
							<div className='eye'>
								<div className='pupil'></div>
							</div>
						</div>
					</div>
				</div>
				<div className='torso'>
					<div className='shirt'></div>
					<div className='pants'></div>
					<div className='shoes'>
						<div className='shoe'></div>
						<div className='shoe'></div>
					</div>
					<div className='hands'>
						<div className='hand'></div>
						<div className='hand'></div>
					</div>
				</div>
			</AvatarWrapper>
		</AvatarContainer>
	);
}
