import React, { createContext, useReducer, useContext } from 'react';
import { initialDataState, dataReducer } from '../reducers/dataReducer';

const DataContext = createContext();

export default function DataProvider({ children }) {
	const [data, dispatch] = useReducer(dataReducer, initialDataState);

	return (
		<DataContext.Provider value={{ data, dispatch }}>
			{children}
		</DataContext.Provider>
	);
}

export function useDataContext() {
	const context = useContext(DataContext);
	if (context === undefined) {
		throw new Error('useDataContext must be used within DataProvider');
	}

	return context;
}
