const sizesWidth = [ 306, 406, 506, 606, 706, 806, 906, 1006, 1106, 1206 ];
const sizesDepth = [ 250, 300, 350, 400 ];
let width = 0;

const SIZE_DIFFERENCE = 28;
const MAX_CUT = 35;

// Panelwidth
export function panelWidth(patioDepth) {
	for (let i = 0; i < sizesDepth.length; i++) {
		if (patioDepth === sizesDepth[i]) {
			return 100;
		} else if (patioDepth <= sizesDepth[i]) return 72;
	}
}

// Panels
export function panelsQty(patioWidth, panelsWidth) {
	let panels = Math.ceil((patioWidth - 6) / panelsWidth);
	return panels;
}

export function glasOpMaat(patioWidth, patioDepth) {
	const depth = glasOpMaatDepth(patioDepth);

	const panelsWidth = panelWidth(patioDepth);

	return {
		width: 123,
		depth: depth,
		widthCuts: 2,
		depthCuts: 3
	};
}

function isStandardSize(patioWidth) {
	for (let i = 0; i < sizesWidth.length; i++) {
		width = sizesWidth[i];
		if (width === patioWidth) {
			return true;
		}
		if (width === patioWidth - SIZE_DIFFERENCE * 2) {
			return true;
		}
		if (width >= patioWidth + SIZE_DIFFERENCE && width <= patioWidth + (SIZE_DIFFERENCE + MAX_CUT)) {
			return true;
		}
		if (width >= patioWidth + (SIZE_DIFFERENCE + MAX_CUT)) {
			return true;
		}
	}
}

export function glasOpMaatWidth(patioWidth, panelsWidth) {
	if (panelsWidth === 100) {
		// Standard Depth
		for (let i = 0; i < sizesWidth.length; i++) {
			width = sizesWidth[i];
			if (width === patioWidth) {
				return {
					width: width,
					panelsCut: 0
				};
			}
			if (width === patioWidth - SIZE_DIFFERENCE * 2) {
				return {
					width: width,
					panelsCut: 2
				};
			}
			if (width >= patioWidth + SIZE_DIFFERENCE && width <= patioWidth + (SIZE_DIFFERENCE + MAX_CUT)) {
				return {
					width: width,
					panelsCut: 1
				};
			}
			if (width >= patioWidth + (SIZE_DIFFERENCE + MAX_CUT)) {
				return {
					width: width,
					panelsCut: 1
				};
			}
		}
	} else if (panelsWidth === 72) {
		// Custom Depth
		for (let i = 0; i < sizesWidth.length; i++) {
			width = sizesWidth[i];
			if (width === patioWidth) {
				let panels = Math.ceil((patioWidth - 6) / panelsWidth);
				let reqSize = panels * 100 + 6;
				return {
					width: reqSize,
					panelsCut: panels
				};
			}
			if (width === patioWidth - SIZE_DIFFERENCE * 2) {
				let panels = Math.ceil((patioWidth - 6) / panelsWidth);
				let reqSize = panels * 100 + 6;
				return {
					width: reqSize,
					panelsCut: panels
				};
			}
			if (width >= patioWidth + SIZE_DIFFERENCE && width <= patioWidth + (SIZE_DIFFERENCE + MAX_CUT)) {
				let panels = Math.ceil((patioWidth - 6) / panelsWidth);
				let reqSize = panels * 100 + 6;
				return {
					width: reqSize,
					panelsCut: panels
				};
			}
			if (width > patioWidth + (SIZE_DIFFERENCE + MAX_CUT)) {
				let panels = Math.ceil((patioWidth - 6) / panelsWidth);
				let reqSize = panels * 100 + 6;
				return {
					width: reqSize,
					panelsCut: panels
				};
			}
		}
	}
}
// Inkorten per plaat
// symmetrie toepassen??
export function perPlaat(sizeWidth, patioWidth, inkortenCM) {
	if (patioWidth === width - SIZE_DIFFERENCE * 2 || patioWidth === width - SIZE_DIFFERENCE || patioWidth === width) {
		let cost = 0;
		console.log('Geen snedes');
		return cost;
	} else {
		// let inkortenPerPlaat = Math.floor(
		// 	(sizeWidth - cutPanels(patioWidth) * SIZE_DIFFERENCE - patioWidth) / cutPanels(patioWidth)
		// );
		// return inkortenPerPlaat;
		return 2;
	}
}

export function glasOpMaatDepth(patioDepth) {
	// Calculate depth
	for (let i = 0; i < sizesDepth.length; i++) {
		const depth = sizesDepth[i];
		if (depth === patioDepth) {
			return depth;
		} else if (depth > patioDepth) {
			return depth;
		}
	}
}

// Berekenen ongeharde panelen
export function cutPanels(patioWidth, panels, sizesDepth) {
	for (let i = 0; i < sizesWidth.length; i++) {
		width = sizesWidth[i];
		let panelsCut = 0;
		if (sizesDepth === 250 || sizesDepth === 300 || sizesDepth === 350 || sizesDepth === 400) {
			console.log('all panels');
			console.log(panels);
		}
		if (width === patioWidth) {
			panelsCut = 0;
		}
		if (width === patioWidth + SIZE_DIFFERENCE * 2) {
			panelsCut = 2;
		}

		if (width >= patioWidth + SIZE_DIFFERENCE && width <= patioWidth + (SIZE_DIFFERENCE + MAX_CUT)) {
			panelsCut = 1;
		}
		if (width > patioWidth + (SIZE_DIFFERENCE + MAX_CUT)) {
			panelsCut = 2;
		}
		return panelsCut;
	}
}

export function cost(patioWidth, pricePerCut) {
	if (patioWidth === width || patioWidth === width - SIZE_DIFFERENCE || patioWidth === width - SIZE_DIFFERENCE * 2) {
		console.log('Geen snedes');
		return 0;
	} else {
		return cutPanels(patioWidth) * pricePerCut;
	}
}
// cmInkorten
export function inkorten(sizeWidth, patioWidth, panelsWidth, panels) {
	if (panelsWidth === 100) {
		let cmInkorten = sizeWidth - cutPanels(patioWidth) * SIZE_DIFFERENCE - patioWidth;
		// console.log('normal');
		return cmInkorten;
	} else {
		let cmInkorten = panels * panelsWidth - patioWidth + 6;
		// console.log('special');
		return cmInkorten;
	}
}
