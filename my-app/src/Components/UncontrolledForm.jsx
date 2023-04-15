import React, { Component } from "react";

export class ControlledForm extends Component {
	constructor(props) {
		super(props);
		this.inputName = React.createRef();
		this.inputCategory = React.createRef();
		this.inputComment = React.createRef();
	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(
			this.inputName.current.value,
			this.inputCategory.current.value,
			this.inputComment.current.value
		);
	};

	render() {
		return (
			<div>
				<h1>Please fill in this form:</h1>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label htmlFor="username">User name:</label>
						<input
							id="username"
							name="username"
							type="text"
							ref={this.inputName}
						/>
					</div>
					<div>
						<label htmlFor="query">Query Category:</label>
						<select
							id="query"
							name="query"
							ref={this.inputCategory}
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
							ref={this.inputComment}
						/>
					</div>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default ControlledForm;
