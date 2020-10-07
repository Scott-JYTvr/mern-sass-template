import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import ProgramNew from './ProgramNew';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	requireAuth(component) {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return Landing;
			default:
				return component;
		}
	}

	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<Header />
					<Route exact path="/" component={Landing} />
					<Route
						exact
						path="/programs"
						component={this.requireAuth(Dashboard)}
					/>
					<Route
						exact
						path="/programs/new"
						component={this.requireAuth(ProgramNew)}
					/>
				</BrowserRouter>
			</div>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default connect(mapStateToProps, actions)(App);
