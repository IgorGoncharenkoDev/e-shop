import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import Register from './pages/register/register.component';
import PageHeader from './components/page-header/page-header.component';

import './App.css';

const App = () => {
	return (
		<div className="App">
			<PageHeader/>
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
