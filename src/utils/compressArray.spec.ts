import { compressArray } from './compressArray';

describe('compressArray', () => {
    it('should compress array', () => {
        const { shifts, stack } = compressArray([0, 2, 2, 0]);

        expect(shifts).toEqual([-1, -2]);
        expect(stack).toEqual([4, 0, 0, 0]);
    });
});