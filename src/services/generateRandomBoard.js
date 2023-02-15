const generateBoard = (width, colors) => {
	const board = [];
	for (let i = 0; i < width; i++) {
		const row = [];
		for (let j = 0; j < width; j++) {
			const randomNum = Math.floor(Math.random() * colors.length);
			row.push(colors[randomNum]);
		}

		board.push(row);
	}

	return board;
};

export default generateBoard;
