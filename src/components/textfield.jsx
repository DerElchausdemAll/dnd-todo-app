import React, { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
	const [value, setValue] = useState(
		JSON.parse(window.localStorage.getItem(key)) ?? initialValue
	);

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};

const TextField = () => {
	const [text, setText] = useLocalStorage("Das hier ist der key", "initialvalue");
	console.log(text);
	return (
		<h1>
			<input
				type="text"
				placeholder="create your headline"
				value={text}
				onChange={e => setText(e.target.value)}
			/>
		</h1>
	);
};

export default TextField;
