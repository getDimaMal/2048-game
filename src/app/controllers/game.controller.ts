import { GameModel } from '../models/game.model';
import { GameView } from '../views/game.view';

export class GameController {
  constructor(private game: GameModel, private view: GameView) {
    this.setKeydownListener();
    this.renderTiles();
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
      this.renderTiles();
    });
  }

  private renderTiles() {
    this.view.setTiles(this.game.getGrid());
  }

  render() {
    return this.view.render();
  }
}