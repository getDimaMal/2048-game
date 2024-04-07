import Utils from "src/utils";


class GameModel {
    private size = 4;
    private field: number[] = [];

    constructor() {
        this.startGame();
    }

    private setField() {
        this.field = Array(this.size ** 2).fill(0);
    }

    private updateField(newField: number[]) {
        this.field = [...newField];
    }

    public getField() {
        return [...this.field];
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
        const matrix = Utils.transposeMatrix(Utils.arrayToMatrix(this.getField(), this.size));

        matrix.forEach((row) => {
            const { shift, stack } = Utils.compressArray(row);
            shiftMatrix.push(shift);
            stackMatrix.push(stack);
        });

        const shift = Utils.matrixToArray(Utils.transposeMatrix(shiftMatrix));
        const field = Utils.matrixToArray(Utils.transposeMatrix(stackMatrix));

        this.updateField(field);
        return shift.filter(value => value !== null);
    };

    moveDown = () => {
        const shiftMatrix = [];
        const stackMatrix = [];
        const matrix = Utils.transposeMatrix(Utils.arrayToMatrix(this.getField(), this.size));

        matrix.forEach((row) => {
            const { shift, stack } = Utils.compressArray(row.reverse());
            shiftMatrix.push(shift.reverse());
            stackMatrix.push(stack.reverse());
        });

        const shift = Utils.matrixToArray(Utils.transposeMatrix(shiftMatrix));
        const field = Utils.matrixToArray(Utils.transposeMatrix(stackMatrix));

        this.updateField(field);
        return shift.filter(value => value !== null);
    };

    moveLeft = () => {
        const shift = [];
        const field = [];
        const matrix = Utils.arrayToMatrix(this.getField(), this.size);

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
        const matrix = Utils.arrayToMatrix(this.getField(), this.size);

        matrix.forEach((row) => {
            const { shift: newShift, stack: newField } = Utils.compressArray(row.reverse());
            shift.push(...newShift.reverse());
            field.push(...newField.reverse());
        });

        this.updateField(field);
        return shift.filter(value => value !== null);
    };
}

export default GameModel;