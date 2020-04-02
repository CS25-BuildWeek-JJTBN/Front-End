export const initialDataState = {
	id: '',
	uuid: '',
	name: '',
	title: '',
	player_items: [],
	description: '',
	players: [],
	visited_rooms: [],
	room_items: [],
	skin_tone: '#e0ac69',
	pupil_color: '#634e34',
	glasses_color: '',
	glasses_style: '',
	hoodie_color: 'gray',
	pants_color: 'darkblue',
	shoe_color: 'white',
	has_glasses: false,
	has_sunglasses: false,
	has_hat: false,
	has_headphones: false,
	lens_color: '',
	headphone_color: '',
	headphone_color_2: '',
	hatband_color: '',
	hat_color: '',
	isLoading: false,
	error: '',
	error_msg: '',
	chatOpen: false,
};

export const dataReducer = (state = initialDataState, action) => {
	switch (action.type) {
		case 'GET_DATA_START':
			return {
				...state,
				error: '',
				isLoading: true,
			};
		case 'UPDATE_DATA_BY_FIELD':
			return {
				...state,
				isLoading: false,
				error: '',
				[action.payload.key]: action.payload.value,
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
				id: action.payload.room,
				room_items: action.payload.room_items,
				error_msg: action.payload.error_msg,
			};
		case 'MOVE_FAILURE':
			return {
				...state,
				error: 'Sorry, error making that move',
				isLoading: false,
			};
		case 'ACTION_START':
			return {
				...state,
				error: '',
				error_msg: '',
				isLoading: true,
			};
		case 'ACTION_FAILURE':
			return {
				...state,
				error: 'Sorry, error taking that action',
				isLoading: false,
			};
		case 'TOGGLE_CHAT':
			return {
				...state,
				chatOpen: action.payload,
			};
		case 'SET_ERROR':
			return {
				...state,
				error_msg: action.payload,
				isLoading: false,
			};
		default:
			return state;
	}
};
