import { useState } from "react";

function ControlledFormHooks() {
	const [name, setName] = useState("");
	const [category, setCategory] = useState("website");
	const [comment, setComment] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name, category, comment);
	};

	return (
		<div>
			<h1>Please fill in this form:</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">User name:</label>
					<input
						id="username"
						name="username"
						value={name}
						onChange={(e) => setName(e.target.value)}
						type="text"
					/>
				</div>
				<div>
					<label htmlFor="query">Query Category:</label>
					<select
						id="query"
						name="query"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					>
						<option value="website">Website Issue</option>
						<option value="order">Order Issue</option>
						<option value="general">General Enquiry</option>
					</select>
				</div>
				<div>
					<label htmlFor="comments">Comments:</label>
					<textarea
						id="comments"
						name="comments"
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>
				</div>
				<input type="submit" />
			</form>
		</div>
	);
}

export default ControlledFormHooks;
