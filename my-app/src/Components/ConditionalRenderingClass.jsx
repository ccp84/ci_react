import React, { Component } from "react";

export class ConditionalRenderingClass extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoaded: true,
			isLoggedIn: false,
		};
	}

	render() {
		return (
			<div>
				<h1>
					{this.state.isLoaded ? "Class Loaded" : "Class Loading..."}
				</h1>
				{this.state.isLoggedIn ? (
					<div>
						<h1>Welcome to the site</h1>
						<ol>
							<li>Menu Item</li>
							<li>Menu Item</li>
						</ol>
					</div>
				) : (
					<div>
						<h1>Please Log in</h1>
						<ol>
							<li>Log In</li>
							<li>Sign Up</li>
						</ol>
					</div>
				)}
			</div>
		);
	}
}

export default ConditionalRenderingClass;
