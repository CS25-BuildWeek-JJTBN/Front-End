import React, { useEffect } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { useUserContext } from '../contexts/UserContext';

import Logo from './Logo';

export default function Nav() {
	const history = useHistory();

	const { pathname } = useLocation();

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
				{pathname !== '/about' && <NavLink to='/about'>About</NavLink>}
				{!isLoggedIn && pathname !== '/login' && (
					<NavLink to='/login'>Login</NavLink>
				)}
				{!isLoggedIn && pathname !== '/register' && (
					<NavLink to='/register'>Register</NavLink>
				)}
				{isLoggedIn && pathname !== '/profile' && (
					<NavLink to='/profile'>Profile</NavLink>
				)}
				{isLoggedIn && pathname !== '/game' && (
					<NavLink to='/game'>Game</NavLink>
				)}
				{isLoggedIn && (
					<div className='signout' onClick={handleLogOut}>
						Logout
					</div>
				)}
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

	@media screen and (max-width: 700px) {
		flex-direction: column;
		padding: 1rem 1rem;
	}
`;

const NavBarLeft = styled.div`
	a {
		color: white;
		text-decoration: none;
	}
`;

const NavBarRight = styled.div`
	width: 80rem;
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 1200px) {
		width: 60rem;
	}

	@media screen and (max-width: 900px) {
		width: 70%;
	}

	@media screen and (max-width: 700px) {
		width: 98%;
		justify-content: space-evenly;
	}

	a,
	.signout {
		color: white;
		text-decoration: none;
		font-size: 2rem;
		cursor: pointer,

		&:hover {
			color: lightblue;
		}

		@media screen and (max-width: 1200px) {
			font-size: 1.4rem;
		}

		@media screen and (max-width: 900px) {
			font-size: 1.2rem;
		}

		@media screen and (max-width: 500px) {
			font-size: 1rem;
		}

		@media screen and (max-width: 350px) {
			font-size: 0.8rem;
		}
	}
`;
