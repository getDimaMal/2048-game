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

    if (emptyTiles.length) {
      const [row, coll] = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
      this.grid[row][coll] = Math.random() < 0.9 ? 2 : 4;
    }
  }

  private compressArr(arr: number[]) {
    let res = arr.filter(value => value);

    for (let i = 0; i < res.length - 1; i++) {
      if (res[i] === res[i + 1]) {
        res[i] += res[i + 1];
        res[i + 1] = 0;
      }
    }

    res = res.filter(value => value);
    const zeros = Array(arr.length - res.length).fill(0);

    return [...res, ...zeros];
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
    const newGrid = this.getTransposedArr(this.grid).map(this.compressArr);
    this.grid = this.getTransposedArr(newGrid);

    this.addRandomTile();
  };

  moveDown = () => {
    const newGrid = this.getTransposedArr(this.grid).map(row => this.compressArr(row.reverse()).reverse());
    this.grid = this.getTransposedArr(newGrid);

    this.addRandomTile();
  };

  moveLeft = () => {
    this.grid = this.grid.map(this.compressArr);

    this.addRandomTile();
  };

  moveRight = () => {
    this.grid = this.grid.map(row => this.compressArr(row.reverse()).reverse());

    this.addRandomTile();
  };
}