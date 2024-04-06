import { arrayToMatrix, matrixToArray, transposeMatrix } from "./matrices";

describe("matrices", () => {
    it("arrayToMatrix", () => {
        const size = 3;
        const array = Array(size ** 2).fill(0);
        const result = arrayToMatrix(array, size);

        expect(result).toEqual(Array(size).fill(null).map(() => Array(size).fill(0)));
    });

    it("matrixToArray", () => {
        const size = 3;
        const matrix = Array(size).fill(null).map(() => Array(size).fill(0));
        const result = matrixToArray(matrix);

        expect(result).toEqual(Array(size ** 2).fill(0));
    });

    it("transposeMatrix", () => {
        const size = 3;
        const matrix = Array(size).fill(null).map((_, index) => Array(size).fill(index));
        const result = transposeMatrix(matrix);

        expect(result).toEqual(Array(size).fill(null).map(() => Array(size).fill(null).map((_, index) => index)));
    });
});