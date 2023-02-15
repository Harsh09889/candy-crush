import React from "react";
import { dragDrop, dragEnd, dragStart } from "../services/dragHandler";

const Candy = ({
	color,
	row,
	col,
	colors,
	setCandyBeingDragged,
	setCandyBeingReplaced,
	candyBeingDragged,
	candyBeingReplaced,
	setCurrentCandies,
	currentCandies,
}) => {
	return (
		<img
			src={color}
			className={`h-[5rem] w-[5rem]`}
			data-row={row}
			data-col={col}
			draggable={true}
			onDragOver={(e) => e.preventDefault()}
			onDragEnter={(e) => e.preventDefault()}
			onDragLeave={(e) => e.preventDefault()}
			onDragStart={(e) => dragStart(e, setCandyBeingDragged)}
			onDrop={(e) => dragDrop(e, setCandyBeingReplaced)}
			onDragEnd={(e) =>
				dragEnd(
					e,
					candyBeingDragged,
					candyBeingReplaced,
					setCurrentCandies,
					currentCandies,
					colors
				)
			}
			alt={color}
		/>
	);
};

export default Candy;
