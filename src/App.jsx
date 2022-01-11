import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Droppable from "./components/droppable";
import Draggable from "./components/draggable";
import { DndContext } from "@dnd-kit/core";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Button from "@mui/material/Button";

const StyledApp = styled.div`
	text-align: center;
`;

const ListItem = styled.li`
	list-style: none;
`;

const App = () => {
	const [value, setValue] = useState("");
	const [todos, setTodos] = useState([{ name: "", isChecked: true }]);
	const [isDropped, setIsDropped] = useState(false);
	const draggableMarkup = <Draggable>Drag me</Draggable>;

	useEffect(() => {
		console.log("New Todo");
	}, [todos]);

	return (
		<StyledApp>
			<div>
				<DndContext onDragEnd={handleDragEnd}>
					{!isDropped ? draggableMarkup : null}
					<Droppable>{isDropped ? draggableMarkup : "Drop here"}</Droppable>
				</DndContext>
				<h2>
					<Button variant="contained">my todos</Button>
				</h2>
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
		</StyledApp>
	);
	function handleDragEnd(event) {
		if (event.over && event.over.id === "droppable") {
			setIsDropped(true);
		}
	}
};

export default App;

//
// useEffect counts clicks in document.title
//

// import React, { useState, useEffect } from "react";
// function App() {
// 	const [count, setCount] = useState(0);

// 	useEffect(() => {
// 		document.title = `You clicked ${count} times`;
// 	});
// 	return (
// 		<div>
// 			<p>You clicked {count} times</p>
// 			<button onClick={() => setCount(count + 1)}>Click me</button>
// 		</div>
// 	);
// }

// 11.01.2021 14:40

// PURE TODO ... without drag and drop

// import React, { useState, useEffect } from "react";
// import styled from "@emotion/styled";
// import Droppable from "./components/droppable";
// import Draggable from "./components/draggable";
// import { DndContext } from "@dnd-kit/core";

// // import styled from "styled-components";

// // function App() {
// //   return (
// {
// 	/* <DndContext>
// 	<Draggable />
// 	<Droppable />
// </DndContext>; */
// }
// //   )
// // }

// // useEffect(() => {
// // 	console.log("render");
// // });

// const StyledApp = styled.div`
// 	text-align: center;
// `;

// const ListItem = styled.li`
// 	list-style: none;
// `;

// const App = () => {
// 	const [value, setValue] = useState("");
// 	const [todos, setTodos] = useState([{ name: "", isChecked: true }]);

// 	useEffect(() => {
// 		console.log("New Todo");
// 	}, [todos]);

// 	return (
// 		<StyledApp>
// 			<div>
// 				<DndContext>
// 					<Draggable>Button</Draggable>
// 					<Droppable />
// 				</DndContext>
// 				<h2>my todos</h2>
// 				<input
// 					type="text"
// 					value={value}
// 					onChange={event_ => {
// 						setValue(event_.target.value);
// 					}}
// 				/>
// 				<button
// 					disabled={!value}
// 					onClick={() => {
// 						setTodos([...todos, { name: value, isChecked: false }]);
// 						setValue("");
// 					}}
// 				>
// 					Add
// 				</button>
// 			</div>
// 			<ul>
// 				{todos.map((todo, index) => {
// 					return (
// 						<li key={index}>
// 							<label>
// 								<input
// 									type="checkbox"
// 									checked={todo.isChecked}
// 									onChange={() => {
// 										console.log(`Item: ${index + 1}`);
// 										const update = [...todos];
// 										update[index].isChecked = !update[index].isChecked;
// 										setTodos(update);
// 									}}
// 								/>
// 								<span
// 									style={{
// 										textDecoration: todo.isChecked ? "line-through" : "none",
// 									}}
// 								>
// 									{todo.name}
// 								</span>
// 							</label>
// 							<button
// 								onClick={() => {
// 									const update = [...todos];
// 									update.splice(index, 1);
// 									setTodos(update);
// 								}}
// 							>
// 								Delete
// 							</button>
// 						</li>
// 					);
// 				})}
// 			</ul>
// 		</StyledApp>
// 	);
// };

// export default App;
