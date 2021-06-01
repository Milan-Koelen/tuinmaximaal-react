import React, { useState } from 'react';
import clsx from 'clsx';

import {
	calculateSierstrips,
	calculateTochtstrips,
	calculateOverlapDoors,
	calculateTotalOverlap
} from './calculateDoors.js';

import {
	Button,
	TextField,
	Typography,
	MenuItem,
	makeStyles,
	FormControl,
	Input,
	FormHelperText,
	InputAdornment
} from '@material-ui/core';

import { urlGenerator } from './urlGenerator';

import {
	glasOpMaatWidth,
	inkorten,
	panelsQty,
	glasOpMaatDepth,
	cutPanels,
	panelWidth,
	cost
	// perPlaat
} from './calculations';

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(4),
		marginBottom: theme.spacing(4)
	}
}));

const DOORWIDTH = 98;

export default function Calculator() {
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

	const depthIdx = sizesDepth.findIndex((size) => size === requiredWidth);
	const widthIdx = sizesWidth.findIndex((size) => size === sizeWidth);

	const pricePerCut = 102;
	const cutCost = cost(patioWidth, pricePerCut);

	const inkortenCM = inkorten(sizeWidth, patioWidth, panelsWidth, panels) + ' cm';

	return (
		<div>
			<TextField
				className={classes.palette}
				id="outlined-select-currency"
				select
				label="Mode"
				value={mode}
				onChange={(e) => setMode(e.target.value)}
				variant="outlined"
			>
				<MenuItem key="deuren" value="deuren">
					Deuren
				</MenuItem>
				<MenuItem key="glasOpMaat" value="glasOpMaat">
					Glas op maat
				</MenuItem>
			</TextField>
			{mode === 'deuren' && (
				<div>
					<FormControl className={classes.textField}>
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

					<Typography variant="h5" gutterBottom>
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
					<FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
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
					<FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
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

					<Typography variant="h5" gutterBottom>
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
							Totaal inkorten: {inkortenCM + 6}
							<br />
							{/* Inkorten per kant: {inkortenPerPlaat + ' cm'} */}
							<br />
							<br />
							Kosten glas op maat: &euro;{cutCost}
							<br />
						</div>
					</Typography>
					<div>
						<Button
							variant="contained"
							color="secondary"
							onClick={() => {
								const url = urlGenerator(widthIdx, depthIdx);

								window.open(url, '_blank');
							}}
						>
							Show offer
						</Button>
					</div>

					{/* <Display panels={Math.ceil(patioWidth / 100)} /> */}
				</div>
			)}
		</div>
	);
}
