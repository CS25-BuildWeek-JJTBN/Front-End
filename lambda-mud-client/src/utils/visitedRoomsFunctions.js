export const visitedRoomsObjToArray = obj =>
	obj &&
	Object.entries(obj)
		.flat()
		.filter(item => typeof item !== 'string');
