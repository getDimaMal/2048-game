import type GameModel from "../models/game.model";
import type GameView from "../views/game.view";


type ActionType = {
    action: () => number[],
    direction: "vertical" | "horizontal",
    multiplier: -1 | 1
}

class GameController {
    private actions: Record<string, ActionType> = {
        "ArrowUp": { action: this.game.moveUp, direction: "vertical", multiplier: 1 },
        "ArrowDown": { action: this.game.moveDown, direction: "vertical", multiplier: -1 },
        "ArrowLeft": { action: this.game.moveLeft, direction: "horizontal", multiplier: 1 },
        "ArrowRight": { action: this.game.moveRight, direction: "horizontal", multiplier: -1 },
    };

    constructor(private game: GameModel, private view: GameView) {
        this.setKeydownListener();
        this.view.renderTiles(this.game.getField());
    }

    private getNotEmptyTiles() {
        return this.view.getTilesList().filter(tile => tile.getValue());
    }

    private setKeydownListener() {
        document.addEventListener("keydown", async ({ key }) => {
            if (!(key in this.actions)) return;

            const { action, direction, multiplier } = this.actions[key];

            const shifts = action();
            const tiles = this.getNotEmptyTiles();

            const promises = tiles.map((tile, index) => tile.slide(direction, shifts[index] * multiplier));
            await Promise.all(promises);

            if (shifts.filter(val => !!val).length) this.game.addRandomTile();
            this.view.renderTiles(this.game.getField());
        });
    }

    render() {
        return this.view.render();
    }
}

export default GameController;