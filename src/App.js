import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import Register from './pages/register/register.component';
import PageHeader from './components/page-header/page-header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

const App = () => {
	const [currentUser, setCurrentUser] = useState({});

	let unsubscribeFromAuth = null;

	useEffect(() => {
		unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			setCurrentUser(userAuth);

			// checking if 'userAuth' is not 'null'
			if (userAuth) {
				// const userRef = firestore.doc(`users/${ userAuth.uid }`);
				// checking if our database has been updated at that reference with any new data
				// (if saved a new user)
				const userRef = await createUserProfileDocument(userAuth);

				// subscribing for any changes to 'userRef'
				// getting the snapshot object representing the data currently(!) stored in our database.
				// the snapshot object contains the data related to the user that we have just
				// possibly stored (if it was a new authentication)
				// or the data related to the user that is already stored in our database.
				userRef.onSnapshot(snapshot => {
					setCurrentUser({
						currentUser: {
							id: snapshot.id,
							...snapshot.data()
						}
					});
				});
			}
			else {
				setCurrentUser(userAuth);
			}

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
