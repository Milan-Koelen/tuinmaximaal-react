export function urlGenerator(depthUrl, widthUrl, sizesWidth, requiredWidth) {
	for (let i = 0; i < sizesWidth.length; i++) {
		let size = requiredWidth;
		if ((size = sizesWidth[i])) {
			let widthURL = widthUrl[i];
			// let depthURL = depthURL[i];

			return (
				'https://www.tuinmaximaal.nl/terrasoverkapping?terrasoverkapping_dak=60%2C5888&terrasoverkapping_diepte=' +
				depthUrl +
				'&terrasoverkapping_lengte=' +
				widthURL
			);
		}
	}
}
