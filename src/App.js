import './App.css';
// import { Input } from '@material-ui/core';

// import Display from './Display';

import React, { useState } from 'react';

import {
	calculateSierstrips,
	calculateTochtstrips,
	calculateOverlapDoors,
	calculateTotalOverlap,
	glasOpMaatWidth,
	glasOpMaatDepth,
	cutPanels
} from './calculations';

const DOORWIDTH = 98;

function App() {
	const [ railLength, setRailLength ] = useState(DOORWIDTH * 4);
	const [ patioDepth, setpatioDepth ] = useState(350);
	const [ patioWidth, setPatioWith ] = useState(506);
	const windowCount = Math.ceil(railLength / DOORWIDTH);
	const totalOverlap = calculateTotalOverlap(windowCount, railLength);

	const sierStrips = calculateSierstrips(windowCount);
	const tochtStrips = calculateTochtstrips(windowCount);
	const overlapDoors = calculateOverlapDoors(windowCount, railLength);
	const panels = Math.ceil((patioWidth - 6) / 100);
	const [ mode, setMode ] = useState('deuren');
	const sizeWidth = glasOpMaatWidth(patioWidth);
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
							Breedte in cm<br />
							<input
								className="valueInput"
								type="number"
								placeholder="420"
								value={railLength}
								onChange={(e) => setRailLength(Number(e.target.value))}
							/>
						</label>

						{/* <label>
							Diepte<br />
							<input
								className="valueInput"
								type="number"
								placeholder="350"
								value={patioDepth}
								onChange={(e) => setpatioDepth(Number(e.target.value))}
							/>
						</label> */}
						<div>
							Rail lengte: {railLength}
							<br />
							Deuren: {windowCount}
							<br />
							Sierstrips: {sierStrips}
							<br />
							Tochtstrips: {tochtStrips}
							<br />
							Totale overlap: {totalOverlap}
							<br />
							Overlap zo gek als een deur: {overlapDoors}
							<br />
						</div>
					</div>
				)}

				{mode === 'glasOpMaat' && (
					<div>
						<label>
							Breedte in cm<br />
							<input
								className="valueInput"
								type="number"
								placeholder="506"
								value={patioWidth}
								onChange={(e) => setPatioWith(Number(e.target.value))}
							/>
						</label>
						<br />
						<label>
							Diepte in cm<br />
							<input
								className="valueInput"
								type="number"
								placeholder="350"
								value={patioDepth}
								onChange={(e) => setpatioDepth(Number(e.target.value))}
							/>
						</label>
						<div>
							Benodigde breedte maat: {glasOpMaatWidth(patioWidth)}
							<br />
							{/* Benodigde diepte maat: {glasOpMaatDepth(patioDepth)} */}
							<br />
							Aantal panelen: {panels}
							<br />
							Waarvan ongehard: {cutPanels(patioWidth)}
							<br />
							Totaal inkorten: {sizeWidth - cutPanels(patioWidth) * 28 - patioWidth + 'cm'}
							<br />
							Inkorten per plaat:{' '}
							{Math.floor((sizeWidth - cutPanels(patioWidth) * 28 - patioWidth) / cutPanels(patioWidth)) +
								'cm'}
							<br />
							<br />
							Kosten glas op maat: &euro;{cutPanels(patioWidth) * 102}
							<br />
						</div>

						{/* <Display panels={Math.ceil(patioWidth / 100)} /> */}
					</div>
				)}
			</header>
		</div>
	);
}

export default App;
