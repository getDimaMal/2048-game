import { compressArray } from "./arrays";

describe("arrays", () => {
    it("compressArray", () => {
        const { shift, stack } = compressArray([0, 2, 2, 0]);

        expect(stack).toEqual([4, 0, 0, 0]);
        expect(shift).toEqual([null, -1, -2, null]);
    });
});