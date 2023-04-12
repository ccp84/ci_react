import React, { Component } from "react";
import UserMessage from "./UserMessage";

export class NestingComponents extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoaded: false,
			isLoggedIn: false,
		};
	}

	handleLogin = () => {
		this.setState({
			isLoaded: true,
			isLoggedIn: true,
		});
	};

	handleLogout = () => {
		this.setState({
			isLoaded: false,
			isLoggedIn: false,
		});
	};

	render() {
		return (
			<div>
				<UserMessage
					isLoggedIn={this.state.isLoggedIn}
					handleLogin={this.handleLogin}
					handleLogout={this.handleLogout}
				/>
			</div>
		);
	}
}

export default NestingComponents;
