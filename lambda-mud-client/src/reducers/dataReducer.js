export const initialDataState = {
	isLoading: false,
	// uuid: '',
	name: '',
	title: '',
	description: '',
	players: [],
	currentRoom: '',
	visitedRooms: [],
	skin_tone: '#e0ac69',
	pupil_color: '#634e34',
	hoodie_color: 'gray',
	pants_color: 'darkblue',
	shoe_color: 'white',
	glasses_color: '',
	glasses_style: '',
	headPhoneColor: '',
	hatColor: '',
	hatBandColor: '',
	lensColor: '',
	hasGlasses: false,
	hasHat: false,
	hasHeadphones: false,
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
				currentRoom: action.payload.room,
				visitedRooms: action.payload.visitedRooms,
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
				currentRoom: action.payload.room,
				error_msg: action.payload.error_msg,
			};
		case 'UPDATE_VISITED_ROOMS':
			return {
				...state,
				visitedRooms: action.payload.visitedRooms,
			};
		case 'MOVE_FAILURE':
			return {
				...state,
				error: 'Sorry, error making that move',
				isLoading: false,
			};
		case 'SET_ATTRIBUTE':
			return {
				...state,
				[action.payload.attribute]: action.payload.value,
			};
		case 'TOGGLE_CHAT':
			return {
				...state,
				chatOpen: action.payload,
			};
		default:
			return state;
	}
};
