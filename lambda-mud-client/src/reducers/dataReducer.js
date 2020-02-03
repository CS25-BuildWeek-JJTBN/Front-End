export const initialDataState = {
	isLoading: false,
	// uuid: '',
	name: '',
	title: '',
	description: '',
	players: [],
	error: '',
	error_msg: '',
};

export const dataReducer = (state = initialDataState, action) => {
	switch (action.type) {
		case 'GET_DATA_START':
			return {
				...state,
				error: '',
				isLoading: true,
			};
		case 'GET_DATA_SUCCESS':
			return {
				...state,
				isLoading: false,
				error: '',
				// uuid: action.payload.uuid,
				name: action.payload.name,
				title: action.payload.title,
				description: action.payload.description,
				players: action.payload.players,
			};
		case 'GET_DATA_FAILURE':
			return {
				...state,
				error: 'Sorry, error retrieving game data',
				isLoading: false,
			};
		case 'MOVE_START':
			return {
				...state,
				error: '',
				error_msg: '',
				isLoading: true,
			};
		case 'MOVE_SUCCESS':
			return {
				...state,
				isLoading: false,
				error: '',
				// uuid: action.payload.uuid,
				name: action.payload.name,
				title: action.payload.title,
				description: action.payload.description,
				players: action.payload.players,
				error_msg: action.payload.error_msg,
			};
		case 'MOVE_FAILURE':
			return {
				...state,
				error: 'Sorry, error making that move',
				isLoading: false,
			};
		default:
			return state;
	}
};
