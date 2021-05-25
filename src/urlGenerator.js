const depthUrlMapping = [ 86, 47, 46, 45 ];
const widthUrlMapping = [ 84, 49, 50, 51, 91, 90, 89, 98, 99, 100 ];

export function urlGenerator(depthIdx, widthIdx) {
	const depthUrl = depthUrlMapping[depthIdx];
	const widthUrl = widthUrlMapping[widthIdx];

	return `https://www.tuinmaximaal.nl/terrasoverkapping?terrasoverkapping_dak=60%2C5888&terrasoverkapping_diepte=${depthUrl}&terrasoverkapping_lengte=${widthUrl}`;
}
