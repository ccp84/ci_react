import { useState, useEffect } from "react";

function UseEffectCounter() {
	const [count, setCount] = useState(0);
	const [time, setTime] = useState(0);
	useEffect(() => {
		document.title = count;
	}, [count]);

	useEffect(() => {
		const interval = setInterval(() => {
			setTime((time) => time + 1);
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div>
			<button onClick={() => setCount((count) => count + 1)}>
				Increment {count}
			</button>
			<h2>The time is {time}</h2>
		</div>
	);
}

export default UseEffectCounter;
