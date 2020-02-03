import React, { useEffect } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { useUserContext } from '../contexts/UserContext';

import Logo from './Logo';

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
		<NavBar>
			<NavLink to='/'>
				<Logo />
			</NavLink>
			<NavLink to='/about'>About Us</NavLink>
			{!user.isLoggedIn && <NavLink to='/login'>Login</NavLink>}
			{!user.isLoggedIn && <NavLink to='/register'>Register</NavLink>}
			{user.isLoggedIn && pathname !== '/game' && (
				<NavLink to='/game'>Game</NavLink>
			)}
			{user.isLoggedIn && <div onClick={handleLogOut}>Sign Out</div>}
		</NavBar>
	);
}

const NavBar = styled.div`
	background-color: #bb1333;
`;
