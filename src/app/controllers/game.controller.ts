import { GameModel } from '../models/game.model';

export class GameController {
    constructor(private game: GameModel) {
        this.setKeydownListener();
    }

    private setKeydownListener() {
        const actions: Record<string, () => void> = {
            'ArrowUp': this.game.moveUp,
            'ArrowDown': this.game.moveDown,
            'ArrowLeft': this.game.moveLeft,
            'ArrowRight': this.game.moveRight,
        };

        document.addEventListener('keydown', ({ key }) => {
            if (key in actions) actions[key]();
        });
    }

    getGrid = () => {
        return this.game.getGrid();
    };
}