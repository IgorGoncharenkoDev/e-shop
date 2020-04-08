import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';

const App = () => {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact component={ Home }/>
				<Route path="/shop" exact>
					<Shop/>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
