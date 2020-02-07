import React, { useEffect } from 'react';

import { useDataContext } from '../../contexts/DataContext';

import {
	ProfilePanelWrapper,
	Checkbox,
} from '../../styled-components/styledComponents';

import setAttribute from '../../utils/setAttribute';

export default function Accessories() {
	const { data, dispatch } = useDataContext();

	useEffect(() => {
		if (!data.has_sunglasses) {
			setAttribute('lens_color', '', dispatch);
		}
	}, [data.has_sunglasses]);

	const wearableItems = ['Glasses', 'Sunglasses', 'Hat', 'Headphones'];

	const handleClick = (type, color) => {
		const attribute = 'has_' + type.toLowerCase();
		setAttribute(attribute, !data[attribute], dispatch);

		if (type === 'Glasses') {
			const colors = color.toLowerCase().split('-');
			setAttribute('has_sunglasses', false, dispatch);
			setAttribute('glasses_style', colors[0], dispatch);
			setAttribute('glasses_color', colors[1], dispatch);
		} else if (type === 'Sunglasses') {
			const colors = color.toLowerCase().split('-');
			setAttribute('has_glasses', false, dispatch);
			setAttribute('glasses_style', colors[0], dispatch);
			setAttribute('glasses_color', colors[1], dispatch);
			setAttribute('lens_color', colors[2], dispatch);
		} else if (type === 'Hat') {
			const colors = color.toLowerCase().split('-');
			setAttribute('hat_color', colors[0], dispatch);
			setAttribute('hatband_color', colors[1], dispatch);
		} else if (type === 'Headphones') {
			setAttribute('headphone_color', color, dispatch);
		}
	};

	return (
		<ProfilePanelWrapper>
			<h3>Add Swag!</h3>
			<h4>Wearable Items:</h4>
			{data.player_items &&
				data.player_items
					.filter(item => wearableItems.includes(item.description))
					.map(item => (
						<div key={item.id} className='color-row'>
							<div>
								{item.color}
								{item.description}
							</div>
							<Checkbox
								onClick={() => handleClick(item.description, item.color)}
								trueValue={data['has_' + item.description.toLowerCase()]}
							/>
						</div>
					))}
		</ProfilePanelWrapper>
	);
}
