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
			<NavBarLeft>
				<NavLink to='/'>
					<Logo />
				</NavLink>
			</NavBarLeft>
			<NavBarRight>
				{user.isLoggedIn && pathname !== '/game' && (
					<NavLink to='/game'>Game</NavLink>
				)}
				<NavLink to='/about'>About</NavLink>
				{!user.isLoggedIn && <NavLink to='/login'>Login</NavLink>}
				{!user.isLoggedIn && <NavLink to='/register'>Register</NavLink>}
				{user.isLoggedIn && <SignOut onClick={handleLogOut}>Sign Out</SignOut>}
			</NavBarRight>
		</NavBar>
	);
}

const NavBar = styled.div`
	background-color: #bb1333;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
`;

const NavBarLeft = styled.div`
	a {
		color: white;
		text-decoration: none;
	}
`;

const NavBarRight = styled.div`
	width: 30rem;
	display: flex;
	justify-content: space-between;


	a {
		color: white;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

const SignOut = styled.div`
	color: white;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;
