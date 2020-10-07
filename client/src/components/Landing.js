import React, { Component } from 'react';

class Landing extends Component {
	render() {
		return (
			<div className="main landing">
				<div className="landing__text-box">
					<h1 className="heading-primary">
						<span className="heading-primary--main">main</span>
						<span className="heading-primary--sub">
							sub heading small sentence
						</span>
					</h1>
					<a href="/auth/google" className="landing__btn">
						Login With Google
					</a>
				</div>
			</div>
		);
	}
}

export default Landing;
