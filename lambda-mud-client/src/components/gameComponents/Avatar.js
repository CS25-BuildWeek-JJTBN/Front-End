import React from 'react';

import {
	AvatarContainer,
	AvatarWrapper,
} from '../../styled-components/AvatarWrapper';

export default function Avatar() {
	const avatarColors = {
		headPhoneColor: 'gold',
		hatColor: 'black',
		hatBandColor: 'black',
		skinTone: '#e0ac69',
		pupilColor: 'black',
		hoodieColor: 'gray',
		pantsColor: 'darkblue',
		shoeColor: 'white',
		lensColor: '',
		glassesColor: 'brown',
		glassesStyle: 'square',
	};

	const accessoriesStatus = {
		glasses: true,
		hat: false,
		headphones: false,
	};

	const headphonesShift = accessoriesStatus.hat ? '7rem' : '2.75rem';

	const glassesShift = () => {
		if (!accessoriesStatus.hat && !accessoriesStatus.headphones)
			return '4.8rem';
		else if (!accessoriesStatus.hat && accessoriesStatus.headphones)
			return '8.4rem';
		else if (accessoriesStatus.hat && !accessoriesStatus.headphones)
			return '10rem';
		else if (accessoriesStatus.hat && accessoriesStatus.headphones)
			return '13.3rem';
	};

	const avatarShift = () => {
		if (!accessoriesStatus.glasses) {
			if (!accessoriesStatus.hat && !accessoriesStatus.headphones)
				return '2rem';
			else if (accessoriesStatus.hat !== accessoriesStatus.headphones)
				return '0rem';
			else if (accessoriesStatus.hat && accessoriesStatus.headphones)
				return '-2rem';
		} else {
			if (!accessoriesStatus.hat && !accessoriesStatus.headphones)
				return '1rem';
			else if (accessoriesStatus.hat !== accessoriesStatus.headphones)
				return '-1rem';
			else if (accessoriesStatus.hat && accessoriesStatus.headphones)
				return '-3rem';
		}
	};

	return (
		<AvatarContainer>
			<AvatarWrapper
				headphonesShift={headphonesShift}
				glassesShift={glassesShift}
				avatarShift={avatarShift}
				avatarColors={avatarColors}>
				{accessoriesStatus.glasses && (
					<div className='glasses'>
						<div className='lens'></div>
						<div className='lens'></div>
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
