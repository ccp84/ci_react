import { Component } from "react";

class StatefulGreeting extends Component {
	constructor(props) {
		super(props);
		this.state = {
			introduction: "Hello",
			buttonText: "Exit",
			counter: 0,
		};
	}

	handleClick() {
		this.setState((prevState) => {
			return {
				introduction:
					prevState.introduction === "Hello" ? "Goodbye!" : "Hello",
				buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
			};
		});
	}

	increment() {
		this.setState((prevState) => {
			return {
				counter: prevState.counter + 1,
			};
		});
	}

	render() {
		return (
			<div>
				<h1>
					{this.state.introduction} {this.props.name}
				</h1>
				<button onClick={() => this.handleClick()}>
					{this.state.buttonText}
				</button>
				<div>
					<button onClick={() => this.increment()}>Count Up</button>
					{this.state.counter}
				</div>
			</div>
		);
	}
}

export default StatefulGreeting;
