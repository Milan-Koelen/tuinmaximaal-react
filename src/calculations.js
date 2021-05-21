const sizesWidth = [ 306, 406, 506, 606, 706, 806, 906, 1006, 1106, 1206 ];
const sizesDepth = [ 250, 300, 350, 400 ];
let width = 0;
// let panelsCut = 0;

export function calculateSierstrips(deuren) {
	let sierStrips = deuren;
	if (deuren > 6) sierStrips += Math.floor(deuren / 6);
	else {
		sierStrips = deuren + 1;
	}
	return sierStrips;
}

export function calculateTochtstrips(deuren) {
	let tochtStrips = deuren - 1;
	let minderStrips = 0;

	// Als er 7 of meer deuren zijn, verwijder een strip per set van 6 deuren
	if (deuren >= 7) minderStrips = Math.floor(deuren / 6);

	return tochtStrips - minderStrips;
}

export function calculateOverlapDoors(deuren, railWidth) {
	let overlapDoors = (deuren * 98 - railWidth) / (deuren - 1);
	// let totalOverlap = deuren * 98 - railWidth;
	// console.log('(' + deuren + ' *98 - ' + railWidth + ') / (' + deuren + ' - 1)');
	// console.log(overlapDoors);
	return overlapDoors;
}

export function calculateTotalOverlap(deuren, railWidth) {
	let totalOverlap = deuren * 98 - railWidth;

	return Math.round(totalOverlap);
}

//

// Glas op maat calculator
export function glasOpMaatWidth(patioWidth) {
	// Calculate width
	for (let i = 0; i < sizesWidth.length; i++) {
		width = sizesWidth[i];
		if (width === patioWidth) {
			return width;
		} else {
			if (width === patioWidth - 56) {
				return width;
			}
			if (width >= patioWidth + 28 && width <= patioWidth + 64) {
				// console.log('next');
				return width;
			} else {
				if (width >= patioWidth + 64) {
					return width;
				}
			}
		}
	}
}

export function glasOpMaatDepth(patioDepth, patioWidth) {
	// Calculate depth
	for (let i = 0; i < sizesDepth.length; i++) {
		const depth = sizesDepth[i];
		if (depth === patioDepth) {
			console.log(depth);
			return depth;
		} else {
			let panels = patioWidth / 72;
			return panels;
		}
	}
}

export function cutPanels(patioWidth) {
	for (let i = 0; i < sizesWidth.length; i++) {
		width = sizesWidth[i];
		if (width === patioWidth) {
			let panelsCut = 0;
			return panelsCut;
		}
		if (width === patioWidth + 56) {
			let panelsCut = 0;
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
