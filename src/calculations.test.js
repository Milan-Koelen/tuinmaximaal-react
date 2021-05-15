import { calculateOverlapDoors, calculateSierstrips } from './calculations';

describe('strip calculations', () => {
	it('should have 2 sierstrips for 1 door', () => {
		const strips = calculateSierstrips(1);
		expect(strips).toBe(2);
	});
	it('should have 10 sierstrips for 8 door', () => {
		const strips = calculateSierstrips(8);
		expect(strips).toBe(10);
	});
	it('should have 14 sierstrips for 12 door', () => {
		const strips = calculateSierstrips(12);
		expect(strips).toBe(14);
	});
});

describe('overlap calculations', () => {
	it('196 2', () => expect(calculateOverlapDoors(2, 196)).toBe(0));
	it('392 4', () => expect(calculateOverlapDoors(4, 392)).toBe(0));
	it('588 6', () => expect(calculateOverlapDoors(6, 588)).toBe(0));

	it('359 4', () => expect(calculateOverlapDoors(4, 359)).toBe(11));
});
