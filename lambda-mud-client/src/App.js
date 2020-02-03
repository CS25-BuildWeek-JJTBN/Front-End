import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import UserProvider from './contexts/UserContext';
import DataProvider from './contexts/DataContext';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Game from './components/Game';
import PrivateRoute from './components/PrivateRoute';

function App() {
	return (
		<div className='App'>
			<UserProvider>
				<Nav />
				<Route exact path='/' component={Home} />
				<Route path='/about' component={About} />
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
				<DataProvider>
					<PrivateRoute path='/game' component={Game} />
				</DataProvider>
			</UserProvider>
		</div>
	);
}

export default App;
