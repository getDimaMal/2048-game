import Utils from 'src/utils';

type MatrixType = (number | null)[][];

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
    const shiftMatrix: MatrixType = [];
    const stackMatrix: MatrixType = [];
    const matrix = Utils.transposeMatrix(Utils.arrayToMatrix(this.getField(), this.size));

    matrix.forEach((row) => {
      const { shift, stack } = Utils.compressArray(row);
      shiftMatrix.push(shift);
      stackMatrix.push(stack);
    });

    const shift = Utils.matrixToArray(Utils.transposeMatrix(shiftMatrix));
    const field = Utils.matrixToArray(Utils.transposeMatrix(stackMatrix));

    this.updateField(field as number[]);
    return shift.filter((value) => value !== null);
  };

  moveDown = () => {
    const shiftMatrix: MatrixType = [];
    const stackMatrix: MatrixType = [];
    const matrix = Utils.transposeMatrix(Utils.arrayToMatrix(this.getField(), this.size));

    matrix.forEach((row) => {
      const { shift, stack } = Utils.compressArray(row.reverse());
      shiftMatrix.push(shift.reverse());
      stackMatrix.push(stack.reverse());
    });

    const shift = Utils.matrixToArray(Utils.transposeMatrix(shiftMatrix));
    const field = Utils.matrixToArray(Utils.transposeMatrix(stackMatrix));

    this.updateField(field as number[]);
    return shift.filter((value) => value !== null);
  };

  moveLeft = () => {
    const field: number[] = [];
    const shift: (number | null)[] = [];
    const matrix = Utils.arrayToMatrix(this.getField(), this.size);

    matrix.forEach((row) => {
      const { shift: newShift, stack: newField } = Utils.compressArray(row);
      field.push(...newField);
      shift.push(...newShift);
    });

    this.updateField(field);
    return shift.filter((value) => value !== null);
  };

  moveRight = () => {
    const field: number[] = [];
    const shift: (number | null)[] = [];
    const matrix = Utils.arrayToMatrix(this.getField(), this.size);

    matrix.forEach((row) => {
      const { shift: newShift, stack: newField } = Utils.compressArray(row.reverse());
      field.push(...newField.reverse());
      shift.push(...newShift.reverse());
    });

    this.updateField(field);
    return shift.filter((value) => value !== null);
  };
}

export default GameModel;
