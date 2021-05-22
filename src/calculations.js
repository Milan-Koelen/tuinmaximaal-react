const sizesWidth = [ 306, 406, 506, 606, 706, 806, 906, 1006, 1106, 1206 ];
const sizesDepth = [ 250, 300, 350, 400 ];
let width = 0;
// let panelsCut = 0;

// Panelwidth
export function panelWidth(patioDepth) {
	for (let i = 0; i < sizesDepth.length; i++) {
		if (patioDepth === sizesDepth[i]) {
			console.log(sizesDepth[i]);
			return 100;
		} else if (patioDepth <= sizesDepth[i]) return 72;
	}
}

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
		} else if (depth > patioDepth) {
			return depth;
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
