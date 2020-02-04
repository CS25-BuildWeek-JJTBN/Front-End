import React from 'react';

import { AvatarWrapper } from '../../styled-components/AvatarWrapper';

export default function Avatar() {
	const avatarColors = {
		headPhoneColor: 'gold',
		hatColor: 'black',
		hatBandColor: 'black',
		skinTone: 'pink',
		eyeColor: 'white',
		pupilColor: 'black',
		hoodieColor: 'purple',
		pantsColor: 'darkblue',
		shoeColor: 'white',
	};

	const accessoriesStatus = {
		headphones: true,
		hat: true,
	};

	const headphonesShift = accessoriesStatus.hat ? '7rem' : '2.75rem';

	return (
		<AvatarWrapper
			headphonesShift={headphonesShift}
			avatarColors={avatarColors}>
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
	);
}
