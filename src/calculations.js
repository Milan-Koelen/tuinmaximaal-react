const sizesWidth = [ 306, 406, 506, 606, 706, 806, 906, 1006, 1106, 1206 ];
const sizesDepth = [ 250, 300, 350, 400 ];

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
	console.log('(' + deuren + ' *98 - ' + railWidth + ') / (' + deuren + ' - 1)');
	console.log(overlapDoors);
	return overlapDoors;
}

export function calculateTotalOverlap(deuren, railWidth) {
	let totalOverlap = deuren * 98 - railWidth;
	console.log(deuren + ' * 98 - ' + railWidth);
	console.log(Math.round(totalOverlap));
	return Math.round(totalOverlap);
}

//

// Glas op maat calculator

export function glasOpMaat(patioDepth, patioWith) {
	const size = 0;
	// Calculate depth
	for (let i = 0; i < sizesWidth.length; i++) {
		const size = sizesWidth[i];
		if (size === patioWith) {
			console.log(size);
			return size;
		} else {
			if (size > patioWith) return size;
			console.log(size);
			return size;
		}
	}
	let panels = (size - 6) / 100;
	console.log(panels);

	// Calculate width
	for (let i = 0; i < sizesDepth.length; i++) {
		const size = sizesDepth[i];
		if (size === patioDepth) {
			console.log(size);
			let panels = (size - 6) / 100;
			console.log(panels);
			return size;
		} else {
			if (size > patioDepth) return size;
			let panels = (size - 6) / 100;
			let actualWidth = size - panels * 28;
			console.log('minimum size ' + size);
			console.log('actial width ' + actualWidth);
			console.log('panels ' + panels);
			return size;
		}
	}
	panels = (size - 6) / 100;
	console.log(panels);
}
