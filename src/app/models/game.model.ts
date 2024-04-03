export class GameModel {
  private grid: number[][];

  constructor() {
    this.startGame();
  }

  private getEmptyTiles() {
    const emptyTiles: [number, number][] = [];

    this.grid.forEach((row, rowIndex) => {
      row.forEach((tile, collIndex) => {
        if (!tile) {
          emptyTiles.push([rowIndex, collIndex]);
        }
      });
    });

    return emptyTiles;
  }

  private addRandomTile() {
    const emptyTiles = this.getEmptyTiles();
    const [row, coll] = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
    this.grid[row][coll] = Math.random() < 0.9 ? 2 : 4;
  }

  private compressRow(row: number[]) {
    let i = 0;
    for (let j = 1; j < row.length; j++) {
      if (!row[j]) continue;
      if (!row[i]) {
        [row[i], row[j]] = [row[j], row[i]];
      }
      if (row[i] === row[j]) {
        row[i] += row[j];
        row[j] = 0;
      } else {
        [row[i + 1], row[j]] = [row[j], row[i + 1]];
      }
      i++;
    }

    return row;
  }

  private getTransposedArr(arr: number[][]) {
    return arr[0].map((_, columnIndex) => arr.map(row => row[columnIndex]));
  }

  startGame = () => {
    this.grid = Array(4).fill(null).map(() => Array(4).fill(0));

    this.addRandomTile();
    this.addRandomTile();
  };

  getGrid = () => {
    return this.grid;
  };

  moveUp = () => {
    const newGrid = this.getTransposedArr(this.grid).map(this.compressRow);
    this.grid = this.getTransposedArr(newGrid);

    this.addRandomTile();
  };

  moveDown = () => {
    const newGrid = this.getTransposedArr(this.grid).map(row => this.compressRow(row.reverse()).reverse());
    this.grid = this.getTransposedArr(newGrid);

    this.addRandomTile();
  };

  moveLeft = () => {
    this.grid.map(this.compressRow);

    this.addRandomTile();
  };

  moveRight = () => {
    this.grid.map(row => this.compressRow(row.reverse()).reverse());

    this.addRandomTile();
  };
}