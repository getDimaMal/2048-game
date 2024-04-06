import Utils from "src/utils";


export class GameModel {
    private size = 4;
    private field: number[] = [];

    constructor() {
        this.startGame();
    }

    private setField() {
        this.field = Array(this.size ** 2).fill(0);
    }

    public getField() {
        return this.field;
    }

    private updateField(newField: number[]) {
        this.field = [...newField];
    }

    private matrixToArray(matrix: number[][]) {
        return matrix.reduce((res, row) => [...res, ...row], []);
    }

    private getMatrix() {
        const matrix = [];
        for (let i = 0; i < this.field.length; i += this.size) {
            matrix.push(this.field.slice(i, i + this.size));
        }
        return matrix;
    }

    private transposeMatrix(matrix: number[][]) {
        return matrix.map((_, colIndex) => matrix.map(row => row[colIndex]));
    }

    addRandomTile() {
        const emptyTiles: number[] = [];
        this.field.forEach((value, index) => !value && emptyTiles.push(index));

        if (emptyTiles.length) {
            const index = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
            this.field[index] = Math.random() > 0.9 ? 4 : 2;
        }
    }

    startGame = () => {
        this.setField();
        this.addRandomTile();
        this.addRandomTile();
    };


    moveUp = () => {
        const shiftMatrix = [];
        const stackMatrix = [];
        const matrix = this.transposeMatrix(this.getMatrix());

        matrix.forEach((row) => {
            const { shift, stack } = Utils.compressArray(row);
            shiftMatrix.push(shift);
            stackMatrix.push(stack);
        });

        const shift = this.matrixToArray(this.transposeMatrix(shiftMatrix));
        const field = this.matrixToArray(this.transposeMatrix(stackMatrix));

        this.updateField(field);
        return shift.filter(value => value !== null);
    };

    moveDown = () => {
        const shiftMatrix = [];
        const stackMatrix = [];
        const matrix = this.transposeMatrix(this.getMatrix());

        matrix.forEach((row) => {
            const { shift, stack } = Utils.compressArray(row.reverse());
            shiftMatrix.push(shift.reverse());
            stackMatrix.push(stack.reverse());
        });

        const shift = this.matrixToArray(this.transposeMatrix(shiftMatrix));
        const field = this.matrixToArray(this.transposeMatrix(stackMatrix));

        this.updateField(field);
        return shift.filter(value => value !== null);
    };

    moveLeft = () => {
        const shift = [];
        const field = [];
        const matrix = this.getMatrix();

        matrix.forEach((row) => {
            const { shift: newShift, stack: newField } = Utils.compressArray(row);
            shift.push(...newShift);
            field.push(...newField);
        });

        this.updateField(field);
        return shift.filter(value => value !== null);
    };

    moveRight = () => {
        const shift = [];
        const field = [];
        const matrix = this.getMatrix();

        matrix.forEach((row) => {
            const { shift: newShift, stack: newField } = Utils.compressArray(row.reverse());
            shift.push(...newShift.reverse());
            field.push(...newField.reverse());
        });

        this.updateField(field);
        return shift.filter(value => value !== null);
    };
}