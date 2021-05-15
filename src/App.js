import './App.css';

import Display from './Display';

import React, { useState } from 'react';

import {
	calculateSierstrips,
	calculateTochtstrips,
	calculateOverlapDoors,
	calculateTotalOverlap,
	glasOpMaat
} from './calculations';

const lengthDisplay = (length) => {
	// let lengthString = '';

	// if (length < 0) lengthString += '-';

	// lengthString += Math.floor(length / 100);

	// if (length % 100 > 0) {
	// 	lengthString += ',';

	// 	if (length % 100 < 10) {
	// 		lengthString += '0';
	// 	}

	// 	lengthString += Math.round(length % 100);
	// }
	// lengthString += 'm';

	return length + 'cm';
};

const DOORWIDTH = 98;

function App() {
	const [ railLength, setRailLength ] = useState(DOORWIDTH * 4);
	const [ patioDepth, setpatioDepth ] = useState(350);
	const windowCount = Math.ceil(railLength / DOORWIDTH);
	const totalOverlap = calculateTotalOverlap(windowCount, railLength);

	const sierStrips = calculateSierstrips(windowCount);
	const tochtStrips = calculateTochtstrips(windowCount);
	const overlapDoors = calculateOverlapDoors(windowCount, railLength);
	const [ mode, setMode ] = useState('deuren');
	return (
		<div className="App">
			<header className="App-header">
				<img
					src="https://www.tuinmaximaal.nl/media/logo/stores/2/TM_logo_1.png"
					className="App-logo"
					alt="logo"
				/>
				<label>
					Mode<br />
					<select name="mode" id="mode" onChange={(e) => setMode(e.target.value)} value={mode}>
						<option value="deuren">Deuren</option>
						<option value="glasOpMaat">Glas op maat</option>
					</select>
				</label>
				{mode === 'deuren' && (
					<div>
						<label>
							Breedte<br />
							<input
								className="valueInput"
								type="number"
								placeholder="420"
								value={railLength}
								onChange={(e) => setRailLength(Number(e.target.value))}
							/>
						</label>
						<br />
						<label>
							Diepte<br />
							<input
								className="valueInput"
								type="number"
								placeholder="350"
								value={patioDepth}
								onChange={(e) => setpatioDepth(Number(e.target.value))}
							/>
						</label>
						<p>
							Rail lengte: {lengthDisplay(railLength)}
							<br />
							Deuren: {windowCount}
							<br />
							Sierstrips: {sierStrips}
							<br />
							Tochtstrips: {tochtStrips}
							<br />
							Totale overlap: {lengthDisplay(totalOverlap)}
							<br />
							Overlap per deur: {lengthDisplay(overlapDoors)}
							<br />
						</p>
					</div>
				)}

				{mode === 'glasOpMaat' && <Display doors={windowCount} />}

				{/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a> */}
			</header>
		</div>
	);
}

export default App;
