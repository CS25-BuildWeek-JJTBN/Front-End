import React, { createContext, useReducer, useContext } from 'react';
import { initialUserState, userReducer } from '../reducers/userReducer';

const UserContext = createContext();

export default function UserProvider({ children }) {
	const [user, dispatch] = useReducer(userReducer, initialUserState);

	return (
		<UserContext.Provider value={{ user, dispatch }}>
			{children}
		</UserContext.Provider>
	);
}

export function useUserContext() {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error('useUserContext must be used within UserProvider');
	}

	return context;
}
