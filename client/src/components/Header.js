import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li className="header__nav-item">
						<a href="/auth/google" className="header__nav-link">
							Login With Google
						</a>
					</li>
				);
			default:
				return (
					<li className="header__nav-item">
						<a href="/api/logout" className="header__nav-link">
							Logout
						</a>
					</li>
				);
		}
	}

	render() {
		return (
			<div className="header">
				<Link to={this.props.auth ? '/programs' : '/'} className="header__logo">
					Logo
				</Link>
				<ul className="header__nav">{this.renderContent()}</ul>
			</div>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default connect(mapStateToProps)(Header);
