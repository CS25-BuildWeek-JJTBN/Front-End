import React, { useEffect } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';

import { useUserContext } from '../contexts/UserContext';

export default function Nav() {
	const { user, dispatch } = useUserContext();
	const history = useHistory();
	const { pathname } = useLocation();

	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch({ type: 'LOGIN_TRUE' });
		}
	}, [dispatch]);

	const handleLogOut = () => {
		localStorage.removeItem('token');
		dispatch({ type: 'LOGOUT' });
		history.push('/');
	};

	return (
		<div>
			<NavLink to='/'>The Legend of Lambda</NavLink>
			<NavLink to='/about'>About Us</NavLink>
			{!user.isLoggedIn && <NavLink to='/login'>Login</NavLink>}
			{!user.isLoggedIn && <NavLink to='/register'>Register</NavLink>}
			{user.isLoggedIn && pathname !== '/game' && (
				<NavLink to='/game'>Game</NavLink>
			)}
			{user.isLoggedIn && <div onClick={handleLogOut}>Sign Out</div>}
		</div>
	);
}
