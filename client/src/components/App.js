import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>;
const ProgramNew = () => <h2>ProgramNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Route exact path="/" component={Landing} />
				<Route exact path="/programs" component={Dashboard} />
				<Route exact path="/programs/new" component={ProgramNew} />
			</BrowserRouter>
		</div>
	);
};

export default App;
