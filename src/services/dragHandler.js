import checkMatchingCandies from "./checkMatchingCandies";

export const dragStart = (e, setCandyBeingDragged) => {
	setCandyBeingDragged(e.target);
};
export const dragDrop = (e, setCandyBeingReplaced) => {
	setCandyBeingReplaced(e.target);
};

export const dragEnd = (
	e,
	candyBeingDragged,
	candyBeingReplaced,
	setCurrentCandies,
	currentCandies,
	colors
) => {
	console.log("Inside dragEnd", currentCandies);

	const draggedIdx = [
		parseInt(candyBeingDragged.getAttribute("data-row")),
		parseInt(candyBeingDragged.getAttribute("data-col")),
	];
	const replacedIdx = [
		parseInt(candyBeingReplaced.getAttribute("data-row")),
		parseInt(candyBeingReplaced.getAttribute("data-col")),
	];

	if (
		(replacedIdx[0] === draggedIdx[0] + 1 &&
			replacedIdx[1] === draggedIdx[1]) ||
		(replacedIdx[0] === draggedIdx[0] - 1 &&
			replacedIdx[1] === draggedIdx[1]) ||
		(replacedIdx[1] === draggedIdx[1] + 1 &&
			replacedIdx[0] === draggedIdx[0]) ||
		(replacedIdx[1] === draggedIdx[1] - 1 && replacedIdx[0] === draggedIdx[0])
	) {
		setCurrentCandies((prev) => {
			const a = prev[draggedIdx[0]][draggedIdx[1]];
			prev[draggedIdx[0]][draggedIdx[1]] = prev[replacedIdx[0]][replacedIdx[1]];
			prev[replacedIdx[0]][replacedIdx[1]] = a;
			return prev;
		});

		const isMatch = checkMatchingCandies(
			currentCandies,
			setCurrentCandies,
			8,
			colors
		);
		console.log("isMatch is", isMatch);

		if (!isMatch) {
			setCurrentCandies((prev) => {
				const a = prev[draggedIdx[0]][draggedIdx[1]];
				prev[draggedIdx[0]][draggedIdx[1]] =
					prev[replacedIdx[0]][replacedIdx[1]];
				prev[replacedIdx[0]][replacedIdx[1]] = a;
				return prev;
			});
		}
	} else return;
};
