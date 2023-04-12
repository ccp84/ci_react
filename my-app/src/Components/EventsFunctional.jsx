import React from "react";

function EventsFunctional() {
	const clickHandler = () => {
		console.log("Functional button clicked");
	};

	return (
		<div>
			<button onClick={clickHandler}>
				Click me - functional component
			</button>
		</div>
	);
}

export default EventsFunctional;
