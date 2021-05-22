const sizesWidth = [ 306, 406, 506, 606, 706, 806, 906, 1006, 1106, 1206 ];
const sizesDepth = [ 250, 300, 350, 400 ];
let width = 0;
// let panelsCut = 0;

// Panelwidth
export function panelWidth(patioDepth) {
	for (let i = 0; i < sizesDepth.length; i++) {
		if (patioDepth === sizesDepth[i]) {
			return 100;
		} else if (patioDepth <= sizesDepth[i]) return 72;
	}
}

export function glasOpMaatWidth(patioWidth, panels, panelsWidth) {
	// Standard Depth
	for (let i = 0; i < sizesWidth.length; i++) {
		width = sizesWidth[i];
		if (width === patioWidth && panelsWidth === 100) {
			return width;
		} else {
			if (width === patioWidth - 56 && panelsWidth === 100) {
				return width;
			}
			if (width >= patioWidth + 28 && width <= patioWidth + 64 && panelsWidth === 100) {
				return width;
			} else {
				if (width >= patioWidth + 64 && panelsWidth === 100) {
					return width;
				} else {
					// console.log('NO STANDARD DEPTH');
				}
			}
		}
	}

	// Custom Depth
	for (let i = 0; i < sizesWidth.length; i++) {
		width = sizesWidth[i];
		if (width === patioWidth && panelsWidth === 72) {
			return panels * panelsWidth;
		} else {
			if (width === patioWidth - 56 && panelsWidth === 72) {
				return panels * panelsWidth;
			}
			if (width >= patioWidth + 28 && width <= patioWidth + 64 && panelsWidth === 72) {
				return panels * panelsWidth;
			} else {
				if (width >= patioWidth + 64 && panelsWidth === 72) {
					return panels * panelsWidth;
				} else {
				}
			}
		}
	}
}
// Inkorten per plaat
export function perPlaat(sizeWidth, patioWidth, inkortenCM) {
	if (inkortenCM === 0) {
		return 0;
	} else {
		let inkortenPerPlaat = Math.floor(
			(sizeWidth - cutPanels(patioWidth) * 28 - patioWidth) / cutPanels(patioWidth)
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
		if (width === patioWidth + 56) {
			let panelsCut = 2;
			return panelsCut;
		}

		if (width >= patioWidth + 28 && width < patioWidth + 63) {
			let panelsCut = 1;
			return panelsCut;
		}
		if (width >= patioWidth + 64) {
			let panelsCut = 2;
			return panelsCut;
		}
	}
}

export function cost(patioWidth, pricePerCut, panelsWidth, inkortenPerPlaat) {
	if (patioWidth === width - 56) {
		let cost = 0;
		console.log('HALVE MAAT');
		return cost;
	} else {
		let cost = cutPanels(patioWidth) * 102;
		return cost;
	}
}
