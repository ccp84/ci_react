import React from "react";

function UserData(props) {
	return (
		<div>
			<h1>{props.isLoaded ? "User Loaded" : "User Loading..."}</h1>
		</div>
	);
}

export default UserData;
