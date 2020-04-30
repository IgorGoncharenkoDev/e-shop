import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import Register from './pages/register/register.component';
import PageHeader from './components/page-header/page-header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

const App = () => {
	const [currentUser, setCurrentUser] = useState({ });

	let unsubscribeFromAuth = null;

	useEffect(() => {
		unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
			createUserProfileDocument(user);

			setCurrentUser(user);

			return () => {
				unsubscribeFromAuth();
			}
		});
	}, [])

	return (
		<div className="App">
			<PageHeader currentUser={ currentUser }/>
			<Switch>
				<Route path="/" exact component={ Home }/>
				<Route path="/shop" exact>
					<Shop/>
				</Route>
				<Route path="/register" exact component={ Register }/>
			</Switch>
		</div>
	);
}

export default App;
