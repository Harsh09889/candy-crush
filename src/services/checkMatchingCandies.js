import blank from "../assets/blank.png";

export default function checkMatchingCandies(
	currentCandies,
	setCurrentCandies,
	width,
	colors
) {
	const checkFourInRow = () => {
		let flag = false;
		for (let i = 0; i < width; i++) {
			for (let j = 0; j <= width - 4; j++) {
				if (
					currentCandies &&
					currentCandies[i][j] === currentCandies[i][j + 1] &&
					currentCandies[i][j + 1] === currentCandies[i][j + 2] &&
					currentCandies[i][j + 2] === currentCandies[i][j + 3]
				) {
					console.log("Matched", i, j);
					flag = true;
					setCurrentCandies((prevCandies) => {
						const newerCandies = prevCandies.map((candyRow, row) =>
							row !== i
								? candyRow
								: candyRow.map((candy, col) =>
										col === j || col === j + 1 || col === j + 2 || col === j + 3
											? blank
											: candy
								  )
						);
						return newerCandies;
					});
				}
			}
		}
		return flag;
	};

	const checkThreeInRow = () => {
		let flag = false;
		for (let i = 0; i < width; i++) {
			for (let j = 0; j <= width - 3; j++) {
				if (
					currentCandies &&
					currentCandies[i][j] === currentCandies[i][j + 1] &&
					currentCandies[i][j + 1] === currentCandies[i][j + 2]
				) {
					console.log("Matched", i, j);
					flag = true;
					setCurrentCandies((prevCandies) => {
						const newerCandies = prevCandies.map((candyRow, row) =>
							row !== i
								? candyRow
								: candyRow.map((candy, col) =>
										col === j || col === j + 1 || col === j + 2 ? blank : candy
								  )
						);
						return newerCandies;
					});
				}
			}
		}
		return flag;
	};

	const checkFourInCol = () => {
		let flag = false;
		for (let i = 0; i <= width - 4; i++) {
			for (let j = 0; j < width; j++) {
				if (
					currentCandies &&
					currentCandies[i][j] === currentCandies[i + 1][j] &&
					currentCandies[i + 1][j] === currentCandies[i + 2][j] &&
					currentCandies[i + 2][j] === currentCandies[i + 3][j]
				) {
					console.log("Matched", i, j);
					flag = true;
					setCurrentCandies((prevCandies) => {
						const newerCandies = [];

						for (let row = 0; row < width; row++) {
							let rowCandy = [];
							for (let col = 0; col < width; col++) {
								if (
									col === j &&
									(row === i || row === i + 1 || row === i + 2 || row === i + 3)
								) {
									rowCandy.push(blank);
								} else {
									rowCandy.push(prevCandies[row][col]);
								}
							}
							newerCandies.push(rowCandy);
						}

						return newerCandies;
					});
				}
			}
		}
		return flag;
	};

	const checkThreeInCol = () => {
		let flag = false;
		for (let i = 0; i <= width - 3; i++) {
			for (let j = 0; j < width; j++) {
				if (
					currentCandies &&
					currentCandies[i][j] === currentCandies[i + 1][j] &&
					currentCandies[i + 1][j] === currentCandies[i + 2][j]
				) {
					flag = true;
					setCurrentCandies((prevCandies) => {
						const newerCandies = [];

						for (let row = 0; row < width; row++) {
							let rowCandy = [];
							for (let col = 0; col < width; col++) {
								if (
									col === j &&
									(row === i || row === i + 1 || row === i + 2)
								) {
									rowCandy.push(blank);
								} else {
									rowCandy.push(prevCandies[row][col]);
								}
							}
							newerCandies.push(rowCandy);
						}

						return newerCandies;
					});
				}
			}
		}
		return flag;
	};

	const moveCandiesDown = () => {
		if (currentCandies) {
			for (let i = 0; i <= width - 2; i++) {
				for (let j = 0; j < width; j++) {
					let prev;
					prev = [...currentCandies];
					if (i === 0 && prev[i][j] === blank) {
						prev[i][j] = colors[Math.floor(Math.random() * colors.length)];
						setCurrentCandies(prev);
					}
					if (currentCandies[i + 1][j] === blank) {
						console.log("mooving", i);
						prev[i + 1][j] = prev[i][j];
						prev[i][j] = blank;
						setCurrentCandies(prev);
					}
				}
			}
		}
	};

	const a = checkFourInRow();
	const b = checkFourInCol();
	const c = checkThreeInCol();
	const d = checkThreeInRow();
	moveCandiesDown();

	const ans = a || b || c || d;

	return ans;
}
