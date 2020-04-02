export const initialUserState = {
	isLoading: false,
	isLoggedIn: false,
	hardMode: true,
};

export const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case 'REGISTRATION_START':
			return {
				...state,
				isLoading: true,
			};
		case 'REGISTRATION_SUCCESS':
			return {
				...state,
				isLoggedIn: true,
				isLoading: false,
			};
		case 'REGISTRATION_FAILURE':
			return {
				...state,
				isLoggedIn: false,
				isLoading: false,
			};
		case 'LOGIN_START':
			return {
				...state,
				isLoading: true,
			};
		case 'LOGIN_SUCCESS':
			return {
				...state,
				isLoggedIn: true,
				isLoading: false,
			};
		case 'LOGIN_FAILURE':
			return {
				...state,
				isLoggedIn: false,
				isLoading: false,
			};
		case 'LOGIN_TRUE':
			return {
				...state,
				isLoggedIn: true,
			};
		case 'SET_MODE':
			return {
				...state,
				hardMode: action.payload.hardMode,
			};
		case 'LOGOUT':
			return {
				...initialUserState,
			};
		default:
			return state;
	}
};
