import React from 'react';
import Box from './components/Box'
import './components/styles/App.css';
import Details from './components/Details';
import Result from './components/Result';
import {
	BrowserRouter,
	Switch,
	Route,
	useParams
} from "react-router-dom";
const App = _ => {
	return (
		<div className="App">
			<BrowserRouter>
					<Route exact path="/" component={Box} />
					<Route exact path="/items/search" component={Result} />
					<Route exact path="/items/:id([A-Z0-9]{12})" component={Details} />
			</BrowserRouter>
		</div>
	);
}

export default App;
