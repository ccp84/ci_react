import React, { Component } from "react";
import axios from "axios";

export class HTTPPosts extends Component {
	postToApi = () => {
		axios
			.post("https://jsonplaceholder.typicode.com/posts", {
				title: "My first Post",
				body: "This is my first post",
				userId: 123,
			})
			.then((response) => console.log(response));
	};

	render() {
		return (
			<div>
				<button onClick={this.postToApi}>It works</button>
			</div>
		);
	}
}

export default HTTPPosts;
