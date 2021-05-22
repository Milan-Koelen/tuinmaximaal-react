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

export function calculateTotalOverlap(deuren, railWidth) {
	let totalOverlap = deuren * 98 - railWidth;

	return Math.round(totalOverlap);
}

export function calculateOverlapDoors(deuren, railWidth) {
	let overlapDoors = (deuren * 98 - railWidth) / (deuren - 1);
	// let totalOverlap = deuren * 98 - railWidth;
	// console.log('(' + deuren + ' *98 - ' + railWidth + ') / (' + deuren + ' - 1)');
	// console.log(overlapDoors);
	return overlapDoors;
}
