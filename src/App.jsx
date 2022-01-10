import React, { useState } from "react";

const App = () => {
	const [value, setValue] = useState("");
	const [todos, setTodos] = useState([{ name: "Test", isChecked: true }]);
	return (
		<div>
			<div>
				<input
					type="text"
					value={value}
					onChange={event_ => {
						setValue(event_.target.value);
					}}
				/>
				<button
					disabled={!value}
					onClick={() => {
						setTodos([...todos, { name: value, isChecked: false }]);
						setValue("");
					}}
				>
					Add
				</button>
			</div>
			<ul>
				{todos.map((todo, index) => {
					return (
						<li key={index}>
							<label>
								<input
									type="checkbox"
									checked={todo.isChecked}
									onChange={() => {
										console.log(`Item: ${index + 1}`);
										const update = [...todos];
										update[index].isChecked = !update[index].isChecked;
										setTodos(update);
									}}
								/>
								<span
									style={{
										textDecoration: todo.isChecked ? "line-through" : "none",
									}}
								>
									{todo.name}
								</span>
							</label>
							<button
								onClick={() => {
									const update = [...todos];
									update.splice(index, 1);
									setTodos(update);
								}}
							>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default App;
