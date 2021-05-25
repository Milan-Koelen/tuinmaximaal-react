import './App.css';

import React from 'react';

import { Paper, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';

import { green, orange } from '@material-ui/core/colors';
import Calculator from './Calculator';

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(4),
		marginBottom: theme.spacing(4)
	}
}));

const theme = createMuiTheme({
	palette: {
		primary: {
			main: green[900]
		},
		secondary: {
			main: orange[500]
		}
	}
});

function App() {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<div className="App-header">
					<img
						src="https://www.tuinmaximaal.nl/media/logo/stores/2/TM_logo_1.png"
						className="App-logo"
						alt="logo"
					/>
					<Paper elevation={3} className={classes.paper}>
						<Calculator />
					</Paper>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
