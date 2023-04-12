import { Component } from "react";

class EventBinding extends Component {
	constructor(props) {
		super(props);
		this.state = {
			introduction: "Hello",
			buttonText: "Exit",
			counter: 0,
		};
	}

	handleClick = () => {
		this.setState((prevState) => {
			return {
				introduction:
					prevState.introduction === "Hello" ? "Goodbye!" : "Hello",
				buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
			};
		});
	};

	render() {
		return (
			<div>
				<h1>
					{this.state.introduction} {this.props.name}
				</h1>
				<button onClick={this.handleClick}>
					{this.state.buttonText}
				</button>
			</div>
		);
	}
}

export default EventBinding;
