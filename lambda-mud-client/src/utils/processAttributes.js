export const processAttributes = (data, dispatch) => {
	const attributesArray = [
		'skin_tone',
		'pupil_color',
		'glasses_color',
		'glasses_style',
		'hoodie_color',
		'pants_color',
		'shoe_color',
	];

	const filteredData = Object.keys(data)
		.filter(key => attributesArray.includes(key))
		.reduce((obj, key) => {
			return { ...obj, [key]: data[key] };
		}, {});

	Object.keys(filteredData).forEach(key => {
		if (!filteredData[key] || filteredData[key] === 'DEFAULT DESCRIPTION')
			delete filteredData[key];
	});

	Object.keys(filteredData).forEach(key => {
		const value = filteredData[key];
		dispatch({ type: 'SET_ATTRIBUTE', payload: { attribute: key, value } });
	});

	Object.keys(filteredData).includes('glasses_style') &&
		dispatch({
			type: 'SET_ATTRIBUTE',
			payload: { attribute: 'hasGlasses', value: true },
		});
};
