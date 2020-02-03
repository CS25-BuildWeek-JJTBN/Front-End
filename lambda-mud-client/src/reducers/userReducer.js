export const initialUserState = {
	isLoading: false,
	isLoggedIn: false,
	error: '',
};

export const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case 'REGISTRATION_START':
			return {
				...state,
				error: '',
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
				error: 'Sorry, cannot register that account',
				isLoggedIn: false,
				isLoading: false,
			};
		case 'LOGIN_START':
			return {
				...state,
				error: '',
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
				error: 'Sorry, cannot login for that username and password combination',
				isLoggedIn: false,
				isLoading: false,
			};
		case 'LOGIN_TRUE':
			return {
				...state,
				isLoggedIn: true,
			};
		case 'LOGOUT':
			return {
				...initialUserState,
			};
		default:
			return state;
	}
};
