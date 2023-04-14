import React from "react";

function Book(props) {
	return (
		<div>
			<h5>{props.book.Title}</h5>
			<p>Author: {props.book.Author}</p>
			<p>Number of pages: {props.book.NumPages}</p>
		</div>
	);
}

export default Book;
