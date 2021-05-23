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
	let panels = Math.ceil(patioWidth / panelsWidth);
	return panels;
}

export function glasOpMaatWidth(patioWidth, panelsWidth) {
	if (panelsWidth === 100) {
		// Standard Depth
		for (let i = 0; i < sizesWidth.length; i++) {
			width = sizesWidth[i];
			if (width === patioWidth) {
				return width;
			}
			if (width === patioWidth - SIZE_DIFFERENCE * 2) {
				return width;
			}
			if (width >= patioWidth + SIZE_DIFFERENCE && width <= patioWidth + (SIZE_DIFFERENCE + MAX_CUT)) {
				return width;
			}
			if (width >= patioWidth + (SIZE_DIFFERENCE + MAX_CUT)) {
				return width;
			}
		}
	} else if (panelsWidth === 72) {
		// Custom Depth
		for (let i = 0; i < sizesWidth.length; i++) {
			width = sizesWidth[i];
			if (width === patioWidth) {
				let panels = Math.ceil(patioWidth / panelsWidth);
				let reqSize = panels * 100 + 6;
				return reqSize;
			}
			if (width === patioWidth - SIZE_DIFFERENCE * 2) {
				let panels = Math.ceil(patioWidth / panelsWidth);
				let reqSize = panels * 100 + 6;
				return reqSize;
			}
			if (width >= patioWidth + SIZE_DIFFERENCE && width <= patioWidth + (SIZE_DIFFERENCE + MAX_CUT)) {
				let panels = Math.ceil(patioWidth / panelsWidth);
				let reqSize = panels * 100 + 6;
				return reqSize;
			}
			if (width > patioWidth + (SIZE_DIFFERENCE + MAX_CUT)) {
				let panels = Math.ceil(patioWidth / panelsWidth);
				let reqSize = panels * 100 + 6;
				return reqSize;
			}
		}
	}
}
// Inkorten per plaat
export function perPlaat(sizeWidth, patioWidth, inkortenCM) {
	if (patioWidth === width - SIZE_DIFFERENCE * 2 || patioWidth === width - SIZE_DIFFERENCE || patioWidth === width) {
		let cost = 0;
		console.log('Geen snedes');
		return cost;
	} else {
		let inkortenPerPlaat = Math.floor(
			(sizeWidth - cutPanels(patioWidth) * SIZE_DIFFERENCE - patioWidth) / cutPanels(patioWidth)
		);
		return inkortenPerPlaat;
	}
}

export function glasOpMaatDepth(patioDepth, patioWidth) {
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
export function cutPanels(patioWidth, panelsWidth, panels) {
	for (let i = 0; i < sizesWidth.length; i++) {
		width = sizesWidth[i];
		if (panelsWidth === 72) {
			console.log('all panels');
			console.log('ongehard');
			return panels;
		}
		if (width === patioWidth) {
			let panelsCut = 0;
			return panelsCut;
		}
		if (width === patioWidth + SIZE_DIFFERENCE * 2) {
			let panelsCut = 2;
			return panelsCut;
		}

		if (width >= patioWidth + SIZE_DIFFERENCE && width <= patioWidth + (SIZE_DIFFERENCE + MAX_CUT)) {
			let panelsCut = 1;
			return panelsCut;
		}
		if (width > patioWidth + (SIZE_DIFFERENCE + MAX_CUT)) {
			let panelsCut = 2;
			return panelsCut;
		}
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
		console.log('normal');
		return cmInkorten;
	} else {
		let cmInkorten = panels * panelsWidth - patioWidth;
		console.log('special');
		return cmInkorten;
	}
}
