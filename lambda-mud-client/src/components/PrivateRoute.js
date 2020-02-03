import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
	return (
		<Route {...rest}>
			{localStorage.getItem('token') ? <Component /> : <Redirect to='/' />}
		</Route>
	);
}
