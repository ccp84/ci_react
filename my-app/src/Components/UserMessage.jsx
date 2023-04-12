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
					<button onClick={props.handleLogout}>Log Out</button>
				</div>
			) : (
				<div>
					<h1>Please Log In</h1>
					<button onClick={props.handleLogin}>Log In</button>
				</div>
			)}
		</div>
	);
}

export default UserMessage;
