import React, { Component } from "react";
import axios from "axios";

export class HTTPRequests extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
		};
	}

	componentDidMount() {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((response) =>
				// console.log(response)
				this.setState({
					posts: response.data,
				})
			);
	}

	render() {
		const posts = this.state.posts;
		return (
			<div>
				<h2>Posts</h2>
				{posts.length ? (
					posts.map((post) => (
						<div key={post.id}>
							<h2>
								{post.id} {post.title}
							</h2>
							<h3>{post.userId}</h3>
							<p>{post.body}</p>
						</div>
					))
				) : (
					<h2>Loading posts...</h2>
				)}
			</div>
		);
	}
}

export default HTTPRequests;
