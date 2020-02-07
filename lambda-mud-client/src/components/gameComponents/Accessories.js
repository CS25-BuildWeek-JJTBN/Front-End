import React from 'react';

import { useDataContext } from '../../contexts/DataContext';

import {
	ProfilePanelWrapper,
	Checkbox,
} from '../../styled-components/styledComponents';

import setAttribute from '../../utils/setAttribute';

export default function Accessories() {
	const { data, dispatch } = useDataContext();

	const wearableItems = ['Glasses', 'Sunglasses', 'Hat', 'Headphones'];

	const handleClick = (type, color) => {
		const attribute = 'has' + type;
		setAttribute(attribute, !data[attribute], dispatch);

		if (type === 'Glasses') setAttribute('glasses_color', color, dispatch);
		else if (type === 'Hat') {
			const colors = color.toLowerCase().split('-');
			setAttribute('hat_color', colors[0], dispatch);
			setAttribute('hatband_color', colors[1], dispatch);
		} else if (type === 'Sunglasses') {
			const colors = color.toLowerCase().split('-');
			setAttribute('glasses_color', colors[0], dispatch);
			setAttribute('lens_color', colors[1], dispatch);
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
								trueValue={data['has' + item.description]}
							/>
						</div>
					))}
		</ProfilePanelWrapper>
	);
}
