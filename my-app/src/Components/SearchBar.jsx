import React, { Component } from "react";
import importednames from "../Names";

export class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			names: importednames,
		};
	}

	handleChange = (event) => {
		let inputText = event.target.value.toLowerCase();
		let filteredNames = importednames.filter((name) => {
			return name.toLowerCase().includes(inputText);
		});
		this.setState({ names: filteredNames });
	};

	render() {
		return (
			<div>
				<h1>Search Names</h1>
				<p>Matching names found: {this.state.names.length}</p>
				<form>
					<label htmlFor="search">Search</label>
					<input
						type="text"
						defaultValue="Search names"
						onChange={this.handleChange}
					/>
				</form>
				<div>
					{this.state.names.map((name) => {
						return <p key={name}>{name}</p>;
					})}
				</div>
			</div>
		);
	}
}

export default SearchBar;
