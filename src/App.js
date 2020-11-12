import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import CharacterDetails from './pages/CharacterDetails';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import './styles/app.css';

function App() {
	return (
		<div id="app" className="app">
			<Header />
			<main id="main" className="main container-fluid">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/people/:id" component={CharacterDetails} />
					<Route path="/movies/:id" component={MovieDetails} />
				</Switch>
			</main>
		</div>
	);
}

export default App;
