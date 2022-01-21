import React, { useState, useEffect } from "react";

//Emotion-Library
import styled from "@emotion/styled";

// Drag&Drop-Library
import { DndContext } from "@dnd-kit/core";

// Key-Generator
import { v4 as uuid } from "uuid";

// Components
import TextField from "./components/textfield";
import Counter from "./components/counter";
import WindowTitle from "./components/windowtitle";
import Droppable from "./components/droppable";
import Draggable from "./components/draggable";

//MUI - Fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//MUI - Button
import Button from "@mui/material/Button";
import Counterzustand from "./components/counterzustand";
import Controls from "./components/counterzustand";

// Style-Components bzw. Emotion
const StyledApp = styled.div`
	text-align: center;
`;

const ListItem = styled.li`
	list-style: none;
`;

// LocalStorage for ToDos
const useLocalStorage = (key, initialState) => {
	const [todos, setTodos] = useState(
		JSON.parse(window.localStorage.getItem(key)) ?? initialState
	);

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(todos));
	}, [key, todos]);

	return [todos, setTodos];
};

const App = () => {
	const [value, setValue] = useState("");
	// const [todos, setTodos] = useState([{ name: "", isChecked: false }]);
	const [todos, setTodos] = useLocalStorage("todos", [
		{ name: "", isChecked: false, id: uuid() },
	]);
	//Draggable & Droppable

	const [isDropped, setIsDropped] = useState(false);
	const draggableMarkup = <Draggable>Drag me</Draggable>;

	//Draggable & Droppable

	return (
		<StyledApp>
			<div>
				<WindowTitle></WindowTitle>
				<TextField></TextField>
				<Counter>Hello</Counter>
				<Counterzustand>Any bears in here</Counterzustand>
				<DndContext onDragEnd={handleDragEnd}>
					{!isDropped ? draggableMarkup : null}
					<Droppable>{isDropped ? draggableMarkup : "Drop here"}</Droppable>
				</DndContext>
				<h2>
					<Button variant="contained">my todos</Button>
				</h2>
				<form
					onSubmit={event_ => {
						event_.preventDefault();
						setTodos([...todos, { name: value, isChecked: false }]);
						setValue("");
					}}
				>
					<input
						type="text"
						value={value}
						onChange={event_ => {
							setValue(event_.target.value);
						}}
					/>
					<button disabled={!value} type="submit">
						Add
					</button>
				</form>
			</div>
			<ul>
				{todos.map((todo, index) => {
					return (
						<li key={todo.id}>
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
