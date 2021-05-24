import './App.css';
// import { Input } from '@material-ui/core';

// import Display from './Display';

import React, { useState, Link } from 'react';
import clsx from 'clsx';
import {
	Button,
	TextField,
	Typography,
	MenuItem,
	Paper,
	makeStyles,
	FormControl,
	Input,
	createMuiTheme,
	ThemeProvider,
	FormHelperText,
	InputAdornment
} from '@material-ui/core';

import {
	calculateSierstrips,
	calculateTochtstrips,
	calculateOverlapDoors,
	calculateTotalOverlap
} from './calculateDoors.js';

import { urlGenerator } from './urlGenerator';

import {
	glasOpMaatWidth,
	inkorten,
	panelsQty,
	glasOpMaatDepth,
	cutPanels,
	panelWidth,
	perPlaat,
	cost
} from './calculations';

import { green, orange } from '@material-ui/core/colors';
// import { Link } from 'react-router-dom';

const DOORWIDTH = 98;

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(4),
		marginBottom: theme.spacing(4)
	}
}));

const theme = createMuiTheme({
	palette: {
		primary: green,
		secondary: orange
	}
});

function App() {
	const [ railLength, setRailLength ] = useState(DOORWIDTH * 4);
	const [ patioDepth, setpatioDepth ] = useState(350);
	const [ patioWidth, setPatioWith ] = useState(506);
	const windowCount = Math.ceil(railLength / DOORWIDTH);
	const totalOverlap = calculateTotalOverlap(windowCount, railLength);

	const classes = useStyles();

	const sierStrips = calculateSierstrips(windowCount);
	const tochtStrips = calculateTochtstrips(windowCount);
	const overlapDoors = calculateOverlapDoors(windowCount, railLength);

	const panelsWidth = panelWidth(patioDepth);
	const [ mode, setMode ] = useState('glasOpMaat');

	const sizesWidth = [ 306, 406, 506, 606, 706, 806, 906, 1006, 1106, 1206 ];
	const sizesDepth = [ 250, 300, 350, 400 ];

	const requiredWidth = glasOpMaatDepth(patioDepth);

	const panels = panelsQty(patioWidth, panelsWidth);
	const sizeWidth = glasOpMaatWidth(patioWidth, panelsWidth);

	const pricePerCut = 102;
	const cutCost = cost(patioWidth, pricePerCut);

	const inkortenCM = inkorten(sizeWidth, patioWidth, panelsWidth, panels) + ' cm';
	const inkortenPerPlaat = perPlaat(sizeWidth, patioWidth, inkortenCM);

	const depthUrl = [ 86, 47, 46, 45 ];
	const widthUrl = [ 84, 49, 50, 51, 91, 90, 89, 98, 99, 100 ];
	const URLGenerator = urlGenerator(depthUrl, widthUrl, sizesWidth, sizesDepth, patioDepth, requiredWidth);

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<header className="App-header">
					<img
						src="https://www.tuinmaximaal.nl/media/logo/stores/2/TM_logo_1.png"
						className="App-logo"
						alt="logo"
					/>
					<Paper elevation={3} className={classes.paper}>
						<label>
							<TextField
								className={classes.palette}
								id="outlined-select-currency"
								select
								label="Mode"
								value={mode}
								onChange={(e) => setMode(e.target.value)}
								// helperText="Mode"
								variant="outlined"
							>
								<MenuItem key="deuren" value="deuren">
									Deuren
								</MenuItem>
								<MenuItem key="glasOpMaat" value="glasOpMaat">
									Glas op maat
								</MenuItem>
							</TextField>
							{/* <select name="mode" id="mode" onChange={(e) => setMode(e.target.value)} value={mode}>
							<option value="deuren">Deuren</option>
							<option value="glasOpMaat">Glas op maat</option>
						</select> */}
						</label>
						{mode === 'deuren' && (
							<div>
								<FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
									<Input
										// id="standard-adornment-weight"
										value={railLength}
										onChange={(e) => setRailLength(Number(e.target.value))}
										endAdornment={<InputAdornment position="end">cm</InputAdornment>}
										aria-describedby="standard-weight-helper-text"
										inputProps={{
											'aria-label': 'Breedte'
										}}
									/>
									<FormHelperText id="standard-weight-helper-text">Breedte</FormHelperText>
								</FormControl>
								{/* <label>
									Breedte in cm<br />
									<input
										className="valueInput"
										type="number"
										placeholder="420"
										value={railLength}
										onChange={(e) => setRailLength(Number(e.target.value))}
									/>
								</label> */}

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
								<Typography variant="h6" gutterBottom>
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
								</Typography>
							</div>
						)}

						{/* GLAS OP MAAT */}
						{mode === 'glasOpMaat' && (
							<div>
								<p>
									<FormControl
										className={clsx(classes.margin, classes.withoutLabel, classes.textField)}
									>
										<Input
											// id="standard-adornment-weight"
											value={patioWidth}
											onChange={(e) => setPatioWith(Number(e.target.value))}
											endAdornment={<InputAdornment position="end">cm</InputAdornment>}
											aria-describedby="standard-weight-helper-text"
											inputProps={{
												'aria-label': 'Breedte'
											}}
										/>
										<FormHelperText id="standard-weight-helper-text">Breedte in cm</FormHelperText>
									</FormControl>
									<br />
									<FormControl
										className={clsx(classes.margin, classes.withoutLabel, classes.textField)}
									>
										<Input
											// id="standard-adornment-weight"
											value={patioDepth}
											onChange={(e) => setpatioDepth(Number(e.target.value))}
											endAdornment={<InputAdornment position="end">cm</InputAdornment>}
											aria-describedby="standard-weight-helper-text"
											inputProps={{
												'aria-label': 'Breedte'
											}}
										/>
										<FormHelperText id="standard-weight-helper-text">Diepte in cm</FormHelperText>
									</FormControl>
									{/* <label>
										Breedte in cm<br />
										<input
											className="valueInput"
											type="number"
											placeholder="506"
											value={patioWidth}
											onChange={(e) => setPatioWith(Number(e.target.value))}
										/>
									</label> */}
									{/* <label>
										Diepte in cm<br />
										<input
											className="valueInput"
											type="number"
											placeholder="350"
											value={patioDepth}
											onChange={(e) => setpatioDepth(Number(e.target.value))}
										/>
									</label> */}
								</p>
								<Typography variant="h6" gutterBottom>
									<div>
										Benodigde breedte maat: {sizeWidth + ' cm'}
										<br />
										Benodigde diepte maat: {requiredWidth + ' cm'}
										<br />
										<br />
										Aantal panelen: {panels}
										<br />
										Waarvan ongehard: {cutPanels(patioWidth)}
										<br />
										Totaal inkorten: {inkortenCM}
										<br />
										{/* Inkorten per kant: {inkortenPerPlaat + ' cm'} */}
										<br />
										<br />
										Kosten glas op maat: &euro;{cutCost}
										<br />
									</div>
								</Typography>
								<div>
									{/* <Button
										component={Link}
										to="urlGenerator(depthUrl, widthUrl, sizesWidth, sizesDepth glasOpMaatDepth)"
										variant="contained"
										color="secondary"
									>
										Show offer{' '}
									</Button> */}
								</div>

								{/* <Display panels={Math.ceil(patioWidth / 100)} /> */}
							</div>
						)}
					</Paper>
				</header>
			</div>
		</ThemeProvider>
	);
}

export default App;
