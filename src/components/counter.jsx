import React, { useState, useEffect } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
	const [theme, setTheme] = useState("blue");
	// count = currentState , setTheme function that allows to update

	const decrementCount = () => {
		setCount(prevCount => prevCount - 1);
		// setTheme("blue");
		setTheme(() => {
			if (count === 1) {
				return setTheme("blue");
			} else if (count <= 0) {
				return setTheme("red");
			} else {
				return setTheme("green");
			}
		});
	};

	const incrementCount = () => {
		setCount(prevCount => prevCount + 1);
		// setTheme("blue");
		setTheme(() => {
			if (count === -1) {
				return setTheme("blue");
			} else if (count >= 0) {
				return setTheme("green");
			} else {
				return setTheme("red");
			}
		});
	};

	return (
		<h2>
			<button onClick={decrementCount}>-</button>
			<span style={{ color: theme }}>{count}</span>
			<button onClick={incrementCount}>+</button>
		</h2>
	);
};

export default Counter;
