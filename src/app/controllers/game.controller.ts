import { GameModel } from '../models/game.model';
import { GameView } from '../views/game.view';

export class GameController {
    constructor(private game: GameModel, private view: GameView) {
        this.setKeydownListener();
        this.view.renderTiles(this.game.getField());
    }

    private setKeydownListener() {
        const actions: Record<string, () => Promise<void>> = {
            'ArrowUp': this.moveUp,
            'ArrowDown': this.moveDown,
            'ArrowLeft': this.moveLeft,
            'ArrowRight': this.moveRight,
        };

        document.addEventListener('keydown', async ({ key }) => {
            if (key in actions) {
                await actions[key]();
                this.game.addRandomTile();
                this.view.renderTiles(this.game.getField());
            }
        });
    }

    private getNotEmptyTiles() {
        return this.view.getTilesList().filter(tile => tile.getValue());
    }

    private moveUp = async () => {
        const shifts = this.game.moveUp();
        const tiles = this.getNotEmptyTiles();
        const promises = tiles.map((tile, index) => tile.slide('vertical', shifts[index]));
        await Promise.all(promises);
    };

    private moveDown = async () => {
        const shifts = this.game.moveDown();
        const tiles = this.getNotEmptyTiles();
        const promises = tiles.map((tile, index) => tile.slide('vertical', shifts[index] * -1));
        await Promise.all(promises);
    };

    private moveLeft = async () => {
        const shifts = this.game.moveLeft();
        const tiles = this.getNotEmptyTiles();
        const promises = tiles.map((tile, index) => tile.slide('horizontal', shifts[index]));
        await Promise.all(promises);
    };

    private moveRight = async () => {
        const shifts = this.game.moveRight();
        const tiles = this.getNotEmptyTiles();
        const promises = tiles.map((tile, index) => tile.slide('horizontal', shifts[index] * -1));
        await Promise.all(promises);
    };


    render() {
        return this.view.render();
    }
}