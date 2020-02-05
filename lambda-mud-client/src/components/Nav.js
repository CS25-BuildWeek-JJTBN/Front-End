import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { useUserContext } from '../contexts/UserContext';

import Logo from './Logo';

export default function Nav() {
	const history = useHistory();

	const {
		user: { isLoggedIn },
		dispatch,
	} = useUserContext();

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
				<NavLink to='/about'>About Us</NavLink>
				{!isLoggedIn && <NavLink to='/login'>Login</NavLink>}
				{!isLoggedIn && <NavLink to='/register'>Register</NavLink>}
				{isLoggedIn && <NavLink to='/profile'>Profile</NavLink>}
				{isLoggedIn && <NavLink to='/game'>Game</NavLink>}
				{isLoggedIn && <SignOut onClick={handleLogOut}>Sign Out</SignOut>}
			</NavBarRight>
		</NavBar>
	);
}

const NavBar = styled.div`
	background-color: #bb1333;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
`;

const NavBarLeft = styled.div`
	a {
		color: white;
		text-decoration: none;
	}
`;

const NavBarRight = styled.div`
	// width: 30rem;
	width: 50%;
	display: flex;
	justify-content: space-between;

	a {
		color: white;
		text-decoration: none;
		font-size: 2rem;

		&:hover {
			color: lightblue;
		}
	}
`;

const SignOut = styled.div`
	color: white;
	cursor: pointer;
	font-size: 2rem;

	&:hover {
		color: lightblue;
	}
`;
