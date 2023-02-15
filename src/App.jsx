import { useEffect, useState } from "react";
import Board from "./components/Board";
import generateBoard from "./services/generateRandomBoard";
import blue from "./assets/blue.png";
import red from "./assets/red.png";
import green from "./assets/green.png";
import orange from "./assets/orange.png";
import yellow from "./assets/yellow.png";
import purple from "./assets/purple.png";

const width = 8;
const colors = [blue, red, green, orange, yellow, purple];

function App() {
	const [currentCandies, setCurrentCandies] = useState([]);

	useEffect(() => {
		setCurrentCandies(generateBoard(width, colors));
	}, []);

	return (
		<div className=''>
			<Board
				setCurrentCandies={setCurrentCandies}
				currentCandies={currentCandies}
				colors={colors}
			/>
		</div>
	);
}

export default App;
