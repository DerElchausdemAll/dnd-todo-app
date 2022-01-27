////////// Working Version ////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import UserComponent from "./UserComponent";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { DndContext, useSensor, PointerSensor, closestCenter } from "@dnd-kit/core";

const App = () => {
	const [items, setItems] = useState([
		{
			id: "1",
			name: "Uwe",
		},
		{
			id: "2",
			name: "Larry",
		},
	]);

	const sensors = [useSensor(PointerSensor)];

	const handleDragEnd = ({ active, over }) => {
		if (active.id !== over.id) {
			setItems(items => {
				const oldIndex = items.findIndex(item => item.id === active.id);
				const newIndex = items.findIndex(item => item.id === over.id);
				return arrayMove(items, oldIndex, newIndex);
			});
		}
	};

	return (
		<div style={{ margin: "auto", width: 200, textAlign: "center" }}>
			<DndContext sensors={sensors} collisions={closestCenter} onDragEnd={handleDragEnd}>
				<SortableContext
					items={items.map(item => item.id)}
					strategy={verticalListSortingStrategy}
				>
					{items.map(item => (
						<UserComponent {...item} key={item.id} />
					))}
				</SortableContext>
			</DndContext>
		</div>
	);
};

export default App;

////////// Working Version ////////////////////////////////////////////////////

///////// Has to be fixed /////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import UserComponent from "./UserComponent";
// import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
// import { DndContext, useSensor, PointerSensor, closestCenter } from "@dnd-kit/core";
// import { v4 as uuid } from "uuid";

// //Emotion-Library
// import styled from "@emotion/styled";

// //MUI - Button
// import Button from "@mui/material/Button";

// // Style-Components bzw. Emotion
// const StyledApp = styled.div`
// 	text-align: center;
// `;

// // LocalStorage for ToDos
// const useLocalStorage = (key, initialState) => {
// 	const [todos, setTodos] = useState(
// 		JSON.parse(window.localStorage.getItem(key)) ?? initialState
// 	);

// 	useEffect(() => {
// 		window.localStorage.setItem(key, JSON.stringify(todos));
// 	}, [key, todos]);

// 	return [todos, setTodos];
// };

// const App = () => {
// 	const [value, setValue] = useState("");
// 	const [todos, setTodos] = useLocalStorage("todos", [
// 		{ name: "", isChecked: false, id: uuid() },
// 	]);

// 	const sensors = [useSensor(PointerSensor)];

// 	return (
// 		<StyledApp>
// 			<div>
// 				<h2>
// 					<Button variant="contained">my todos</Button>
// 				</h2>
// 				<form
// 					onSubmit={event_ => {
// 						event_.preventDefault();
// 						setTodos([...todos, { name: value, isChecked: false }]);
// 						setValue("");
// 					}}
// 				>
// 					<input
// 						type="text"
// 						value={value}
// 						onChange={event_ => {
// 							setValue(event_.target.value);
// 						}}
// 					/>
// 					<button disabled={!value} type="submit">
// 						Add
// 					</button>
// 				</form>
// 			</div>
// 			<div style={{ margin: "auto", width: 200, textAlign: "center" }}>
// 				<DndContext
// 					sensors={sensors}
// 					collisions={closestCenter}
// 					onDragEnd={event => console.log(event)}
// 				></DndContext>
// 				<SortableContext
// 					todos={todos.map(todo => todo.id)}
// 					strategy={verticalListSortingStrategy}
// 				>
// 					{todos.map(todo => {
// 						<UserComponent {...todo} key={todo.id} />;
// 					})}
// 				</SortableContext>
// 			</div>
// 		</StyledApp>
// 	);
// };

// export default App;

///////// Has to be fixed /////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";

// //Emotion-Library
// import styled from "@emotion/styled";

// import { v4 as uuid } from "uuid";

// import { DndContext } from "@dnd-kit/core";
// import Droppable from "./components/droppable";
// import Draggable from "./components/draggable";

// //MUI - Fonts
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";

// //MUI - Button
// import Button from "@mui/material/Button";

// // Style-Components bzw. Emotion
// const StyledApp = styled.div`
// 	text-align: center;
// `;

// const ListItem = styled.li`
// 	list-style: none;
// `;

// // LocalStorage for ToDos
// const useLocalStorage = (key, initialState) => {
// 	const [todos, setTodos] = useState(
// 		JSON.parse(window.localStorage.getItem(key)) ?? initialState
// 	);

// 	useEffect(() => {
// 		window.localStorage.setItem(key, JSON.stringify(todos));
// 	}, [key, todos]);

// 	return [todos, setTodos];
// };

// const App = () => {
// 	const [value, setValue] = useState("");
// 	// const [todos, setTodos] = useState([{ name: "", isChecked: false }]);
// 	const [todos, setTodos] = useLocalStorage("todos", [
// 		{ name: "", isChecked: false, id: uuid() },
// 	]);
// 	//Draggable & Droppable

// 	const [isDropped, setIsDropped] = useState(false);
// 	const draggableMarkup = <Draggable>Drag me</Draggable>;

// 	//Draggable & Droppable

// 	return (
// 		<StyledApp>
// 			<div>
// 				<DndContext onDragEnd={handleDragEnd}>
// 					{!isDropped ? draggableMarkup : null}
// 					<Droppable>{isDropped ? draggableMarkup : "Drop here"}</Droppable>
// 				</DndContext>
// 				<h2>
// 					<Button variant="contained">my todos</Button>
// 				</h2>
// 				<form
// 					onSubmit={event_ => {
// 						event_.preventDefault();
// 						setTodos([...todos, { name: value, isChecked: false }]);
// 						setValue("");
// 					}}
// 				>
// 					<input
// 						type="text"
// 						value={value}
// 						onChange={event_ => {
// 							setValue(event_.target.value);
// 						}}
// 					/>
// 					<button disabled={!value} type="submit">
// 						Add
// 					</button>
// 				</form>
// 			</div>
// 			<ul>
// 				{todos.map((todo, index) => {
// 					return (
// 						<li key={todo.id}>
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
// 	function handleDragEnd(event) {
// 		if (event.over && event.over.id === "droppable") {
// 			setIsDropped(true);
// 		}
// 	}
// };

// export default App;
