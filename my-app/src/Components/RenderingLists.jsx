import React from "react";
import Book from "./Book";

function RenderingLists() {
	const booklist = [
		{ Title: "To kill a mockingbird", Author: "Harper Lee", NumPages: 281 },
		{
			Title: "The Great Gatsby",
			Author: "f. Scott Fitzgerald",
			NumPages: 218,
		},
		{
			Title: "The Catcher in the Rye",
			Author: "j.d. Salinger",
			NumPages: 234,
		},
	];
	return (
		<div>
			{booklist.map((book) => {
				return <Book key={book.Title} book={book} />;
			})}
		</div>
	);
}

export default RenderingLists;
