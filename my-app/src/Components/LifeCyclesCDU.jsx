import React, { Component } from "react";

export class LifeCyclesCDU extends Component {
	constructor(props) {
		super(props);

		this.state = {
			greeting: "Hello",
		};
	}

	toggleGreeting = () => {
		this.setState((prevState) => {
			return {
				greeting: prevState.greeting === "Hello" ? "Goodbye" : "Hello",
			};
		});
	};

	componentDidUpdate() {
		console.log("Component did update");
	}

	render() {
		return (
			<div>
				<h1>{this.state.greeting}</h1>
				<button onClick={this.toggleGreeting}>Change Greeting</button>
			</div>
		);
	}
}

export default LifeCyclesCDU;
