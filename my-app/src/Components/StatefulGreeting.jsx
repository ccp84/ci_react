import { Component } from "react";

class StatefulGreeting extends Component {
	constructor(props) {
		super(props);
		this.state = {
			introduction: "Hello",
			buttonText: "Exit",
		};
	}

	handleClick() {
		this.setState(
			{
				introduction:
					this.state.introduction === "Hello" ? "Goodbye!" : "Hello",
				buttonText:
					this.state.buttonText === "Enter" ? "Exit" : "Enter",
			},
			() => {
				console.log("inside arrow function", this.state.introduction);
			}
		);
		console.log("after arrow function", this.state.introduction);
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
			</div>
		);
	}
}

export default StatefulGreeting;
