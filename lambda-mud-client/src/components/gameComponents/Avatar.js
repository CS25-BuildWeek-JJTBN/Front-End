import React from 'react';

import { useDataContext } from '../../contexts/DataContext';

import {
	AvatarContainer,
	AvatarWrapper,
} from '../../styled-components/AvatarWrapper';

export default function Avatar() {
	const { data } = useDataContext();

	const headphonesShift = data.has_hat ? '7rem' : '2.75rem';

	const glassesShift = () => {
		if (!data.has_hat && !data.has_headphones) return '4.8rem';
		else if (!data.has_hat && data.has_headphones) return '8.4rem';
		else if (data.has_hat && !data.has_headphones) return '10rem';
		else if (data.has_hat && data.has_headphones) return '13.3rem';
	};

	const avatarShift = () => {
		if (!data.has_glasses) {
			if (!data.has_hat && !data.has_headphones) return '2rem';
			else if (data.has_hat !== data.has_headphones) return '0rem';
			else if (data.has_hat && data.has_headphones) return '-2rem';
		} else {
			if (!data.has_hat && !data.has_headphones) return '1rem';
			else if (data.has_hat !== data.has_headphones) return '-1rem';
			else if (data.has_hat && data.has_headphones) return '-3rem';
		}
	};

	return (
		<AvatarContainer>
			<AvatarWrapper
				headphonesShift={headphonesShift}
				glassesShift={glassesShift}
				avatarShift={avatarShift}
				data={data}>
				{data.has_glasses && (
					<div className='glasses'>
						<div className='lens'></div>
						<div className='lens'></div>
					</div>
				)}
				{data.has_headphones && (
					<div className='headphones'>
						<div className='headphone'></div>
						<div className='headphone-band'></div>
						<div className='headphone'></div>
					</div>
				)}
				{data.has_hat && (
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
