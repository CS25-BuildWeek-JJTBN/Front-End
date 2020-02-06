export const visitedRoomsObjToArray = obj =>
	Object.entries(obj)
		.flat()
		.filter(item => typeof item !== 'string');
