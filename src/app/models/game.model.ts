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

    startGame = () => {
        this.grid = Array(4).fill(null).map(() => Array(4).fill(0));

        this.addRandomTile();
        this.addRandomTile();
    };

    getGrid = () => {
        return this.grid;
    };

    moveUp = () => {
        console.log('Move UP');
    };

    moveDown = () => {
        console.log('Move Down');
    };

    moveLeft = () => {
        console.log('Move Left');
    };

    moveRight = () => {
        console.log('Move Right');
    };
}