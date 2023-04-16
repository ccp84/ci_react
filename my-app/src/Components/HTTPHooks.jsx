import { useState, useEffect } from "react";
import axios from "axios";

function HTTPHooks() {
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState(null);
	const [postMessage, setPostMessage] = useState(null);
	const postToAPI = () => {
		axios
			.post("https://jsonplaceholder.typicode.com/posts", {
				title: "My First Post",
				body: "This is my first blog post",
				userId: 123,
			})
			.then((response) =>
				setPostMessage(
					response.status === 201
						? `Success: Title ${response.data.title}`
						: `Failed`
				)
			);
	};

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/posts/")
			.then((response) => setPosts(response.data))
			.catch((error) => {
				setError(error.message);
			});
	}, []);

	return (
		<div>
			<button onClick={postToAPI}>Post message</button>
			{postMessage ? postMessage : <p>Please click the button</p>}
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
			) : error ? (
				<p>{error}</p>
			) : (
				<h2>Loading posts...</h2>
			)}
		</div>
	);
}

export default HTTPHooks;
