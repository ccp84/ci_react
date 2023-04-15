import React, { Component } from "react";

export class ControlledForm extends Component {
	constructor(props) {
		super(props);

		this.state = { username: "" };
	}

	handleChange = (event) => {
		this.setState(() => {
			return {
				username: event.target.value,
			};
		});
	};

	render() {
		return (
			<div>
				<h1>Please fill in this form:</h1>
				<form>
					<div>
						<label htmlFor="username">User name:</label>
						<input
							id="username"
							name="username"
							onChange={this.handleChange}
							type="text"
						/>
					</div>
					<div>
						<label htmlFor="query">Query Category:</label>
						<select id="query" name="query">
							<option value="website">Website Issue</option>
							<option value="order">Order Issue</option>
							<option value="general">General Enquiry</option>
						</select>
					</div>
					<div>
						<label htmlFor="comments">Comments:</label>
						<textarea id="comments" name="comments" />
					</div>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default ControlledForm;
