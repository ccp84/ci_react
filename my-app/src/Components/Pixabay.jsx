import { useEffect, useState } from "react";
import axios from "axios";
import API_KEY from "../secrets";

function Pixabay() {
	const [getpic, setGetpic] = useState("sports");

	useEffect(() => {
		let URL = API_KEY + getpic;
		axios.get(URL).then((response) => console.log(response));
	});

	return (
		<div>
			<h1>Search for a picture</h1>

			<h2>Results</h2>
		</div>
	);
}

export default Pixabay;
