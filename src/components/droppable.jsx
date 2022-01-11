import React from "react";
import { useDroppable } from "@dnd-kit/core";

function Droppable(props) {
	const { isOver, setNodeRef } = useDroppable({
		id: "droppable",
	});
	const style = {
		height: "100px",
		weidth: "100px",
		color: isOver ? "green" : undefined,
		border: "1px solid black",
	};

	return (
		<div ref={setNodeRef} style={style}>
			{props.children}
		</div>
	);
}

export default Droppable;
