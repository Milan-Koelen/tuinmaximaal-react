const sizesWidth = [ 306, 406, 506, 606, 706, 806, 906, 1006, 1106, 1206 ];
const sizesDepth = [ 250, 300, 350, 400 ];
let width = 0;

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
	// console.log(deuren + ' * 98 - ' + railWidth);
	// console.log(Math.round(totalOverlap));
	return Math.round(totalOverlap);
}

//

// Glas op maat calculator
export function glasOpMaatWidth(patioWidth) {
	// const size = 0;

	// Calculate width
	for (let i = 0; i < sizesWidth.length; i++) {
		width = sizesWidth[i];
		if (width === patioWidth) {
			console.log(patioWidth);
			console.log(width);
			return width;
		} else {
			if (width > patioWidth + 28 && width < patioWidth + 63) {
				// console.log(patioWidth + 'is not' + width);
				// console.log('next');
				let cut = width - patioWidth;
				return width;
			} else {
				if (width > patioWidth + 64) {
					return width;
				}
			}
		}
	}
}

export function glasOpMaatDepth(patioDepth, width) {
	// panels = (width - 6) / 100;
	// // console.log(panels);
	// Calculate depth
	for (let i = 0; i < sizesDepth.length; i++) {
		const depth = sizesDepth[i];
		if (depth === patioDepth) {
			console.log(depth);
			let panels = width / 100;
			return depth + panels;
		} else {
			if (depth > patioDepth);
			let panels = width / 100;

			// console.log('minimum size ' + depth);
			// console.log('actial width ' + actualDepth);
			// console.log('panels ' + panels);
			return depth + panels;
		}
	}
}
