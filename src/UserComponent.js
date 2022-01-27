//////// Working Version ////////////////////////////////////////////////////

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const UserComponent = ({ id, name }) => {
	const { setNodeRef, attributes, listeners, transition, transform } = useSortable({ id: id });

	const style = {
		transition,
		transform: CSS.Transform.toString(transform),
		border: "2px solid black",
		marginBottom: 5,
		marginTop: 5,
	};

	return (
		<div ref={setNodeRef} {...attributes} {...listeners} style={style}>
			{name}
		</div>
	);
};

export default UserComponent;

//////// Working Version ////////////////////////////////////////////////////

///////// Has to be fixed /////////////////////////////////////////////////////

// import React from "react";
// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";

// const UserComponent = ({ id, todo }) => {
// 	const { setNodeRef, attributes, listeners, transition, transform } = useSortable({ id: id });

// 	const style = {
// 		transition,
// 		transform: CSS.Transform.toString(transform),
// 		border: "2px solid black",
// 		marginBottom: 5,
// 		marginTop: 5,
// 	};

// 	return (
// 		<div ref={setNodeRef} {...attributes} {...listeners} style={style}>
// 			<li key={todo.id}>
// 				<label>
// 					<input
// 						type="checkbox"
// 						checked={todo.isChecked}
// 						onChange={() => {
// 							console.log(`Item: ${index + 1}`);
// 							const update = [...todos];
// 							update[index].isChecked = !update[index].isChecked;
// 							setTodos(update);
// 						}}
// 					/>
// 					<span
// 						style={{
// 							textDecoration: todo.isChecked ? "line-through" : "none",
// 						}}
// 					>
// 						{todo.name}
// 					</span>
// 				</label>
// 				<button
// 					onClick={() => {
// 						const update = [...todos];
// 						update.splice(index, 1);
// 						setTodos(update);
// 					}}
// 				>
// 					Delete
// 				</button>
// 			</li>
// 		</div>
// 	);
// };

// export default UserComponent;

///////// Has to be fixed /////////////////////////////////////////////////////
