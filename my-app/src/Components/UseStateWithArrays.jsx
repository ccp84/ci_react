import { useState } from "react";

function UseStateWithArrays() {
	const [nums, setNums] = useState([1, 2, 3]);
	const addNumber = () => {
		setNums([...nums, nums.length + 1]);
	};

	return (
		<div>
			<button onClick={addNumber}>Add Number</button>
			<ul>
				{nums.map((num) => (
					<li key={num}>{num}</li>
				))}
			</ul>
		</div>
	);
}

export default UseStateWithArrays;
