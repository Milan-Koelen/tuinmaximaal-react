import './App.css';
// import { Input } from '@material-ui/core';

// import Display from './Display';

import React, { useState } from 'react';

import {
	calculateSierstrips,
	calculateTochtstrips,
	calculateOverlapDoors,
	calculateTotalOverlap
} from './calculateDoors.js';

import { glasOpMaatWidth, glasOpMaatDepth, cutPanels, panelWidth, perPlaat, cost } from './calculations';

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

	const panelsWidth = panelWidth(patioDepth);
	const [ mode, setMode ] = useState('glasOpMaat');

	const panels = Math.ceil((patioWidth - 6) / panelsWidth);
	const sizeWidth = glasOpMaatWidth(patioWidth, panels, panelsWidth);

	const pricePerCut = 102;
	const cutCost = cost(patioWidth, pricePerCut);

	const inkortenCM = sizeWidth - cutPanels(patioWidth) * 28 - patioWidth + ' cm';
	const inkortenPerPlaat = perPlaat(sizeWidth, patioWidth, inkortenCM);

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
							Rail lengte: {railLength + ' cm'}
							<br />
							Deuren: {windowCount}
							<br />
							Sierstrips: {sierStrips}
							<br />
							Tochtstrips: {tochtStrips}
							<br />
							Totale overlap: {totalOverlap + ' cm'}
							<br />
							Overlap per deur: {overlapDoors + ' cm'}
							<br />
						</div>
					</div>
				)}

				{/* GLAS OP MAAT */}

				{mode === 'glasOpMaat' && (
					<div>
						<p>
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
						</p>
						<div>
							Benodigde breedte maat: {panels * 100 + 6 + ' cm'}
							<br />
							Benodigde diepte maat: {glasOpMaatDepth(patioDepth) + ' cm'}
							<br />
							<br />
							Aantal panelen: {panels}
							<br />
							Waarvan ongehard: {cutPanels(patioWidth)}
							<br />
							Totaal inkorten: {inkortenCM}
							<br />
							Inkorten per plaat: {inkortenPerPlaat + ' cm'}
							<br />
							<br />
							Kosten glas op maat: &euro;{cutCost}
							<br />
						</div>

						{/* <Display panels={Math.ceil(patioWidth / 100)} /> */ console.log('PAGE LOADED')}
					</div>
				)}
			</header>
		</div>
	);
}

export default App;
