const sizesDepth = [ 250, 300, 350, 400 ];

export function reqSize(patioDepth) {
	for (let i = 0; i < sizesDepth.length; i++) {
		const sizeDepth = sizesDepth[i];

		if (patioDepth === sizeDepth) {
			return sizeDepth;
		}
		if (sizeDepth > patioDepth) {
			let panelWidth = 72;
			let reqWidth = patioDepth / panelWidth;
			return reqWidth;
		}
	}
}

export function reqWidth(patioDepth, patioWidth) {
	for (let i = 0; i < sizesDepth.length; i++) {
		const sizeDepth = sizesDepth[i];

		if (patioDepth !== sizeDepth) {
			let panelWidth = 72;
			let panels = (patioWidth - 6) / panelWidth;
			let reqWidth = panels * 100 + 6;

			return reqWidth;
		}
	}
}
