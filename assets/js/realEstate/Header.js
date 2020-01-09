import React, { Component } from 'react';

export default class Header extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<header>
				<div className="logo">LOGO </div>

				<nav>
					<a href="#">List With Us</a>
					<a href="#">Log In </a>
					<a href="#" className="register-btn">
						Register
					</a>
				</nav>
			</header>
		);
	}
}
