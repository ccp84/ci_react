import React from "react";

function UserMessage(props) {
	return (
		<div>
			{props.isLoggedIn ? (
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

export default UserMessage;
