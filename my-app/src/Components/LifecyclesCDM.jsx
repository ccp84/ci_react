import React, { Component } from "react";
import LifecyclesCDMChild from "./LifecyclesCDMChild";

export class LifecyclesCDM extends Component {
	constructor(props) {
		super(props);
		console.log("set state");
		this.state = {
			data: "loading...",
		};
	}

	getData = () => {
		console.log("fetching data");
		setTimeout(() => {
			this.setState({
				data: "Data Loaded",
			});
			console.log("data fetched");
		}, 3000);
	};

	componentDidMount() {
		console.log("component mounted");
		this.getData();
	}

	render() {
		console.log("render");
		return (
			<div>
				<h1>{this.state.data}</h1>
				<LifecyclesCDMChild />
			</div>
		);
	}
}

export default LifecyclesCDM;
