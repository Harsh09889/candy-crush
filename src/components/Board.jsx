import React, { useEffect, useState } from "react";
import checkMatchingCandies from "../services/checkMatchingCandies";
import Candy from "./Candy";

const Board = ({ currentCandies, setCurrentCandies, colors }) => {
	const [candyBeingDragged, setCandyBeingDragged] = useState(null);
	const [candyBeingReplaced, setCandyBeingReplaced] = useState(null);

	useEffect(() => {
		let timer;

		if (currentCandies.length) {
			timer = setInterval(() => {
				checkMatchingCandies(currentCandies, setCurrentCandies, 8, colors);
				// console.log(currentCandies);
			}, 100);
		}
		return () => clearInterval(timer);
	}, [currentCandies]);

	return (
		<div className='h-[40rem] w-[40rem] mx-auto flex flex-wrap'>
			{currentCandies.map((row, i) =>
				row.map((candy, j) => (
					<Candy
						key={`${i}${j}`}
						color={candy}
						row={i}
						col={j}
						colors={colors}
						currentCandies={currentCandies}
						setCurrentCandies={setCurrentCandies}
						setCandyBeingDragged={setCandyBeingDragged}
						setCandyBeingReplaced={setCandyBeingReplaced}
						candyBeingDragged={candyBeingDragged}
						candyBeingReplaced={candyBeingReplaced}
					/>
				))
			)}
		</div>
	);
};

export default Board;
