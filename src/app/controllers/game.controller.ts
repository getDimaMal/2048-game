import { GameModel } from '../models/game.model';
import { GameView } from '../views/game.view';

export class GameController {
  constructor(private game: GameModel, private view: GameView) {
    this.setKeydownListener();
    this.renderTiles();
  }

  private setKeydownListener() {
    const actions: Record<string, () => void | Promise<void>> = {
      'ArrowUp': this.game.moveUp,
      'ArrowDown': this.game.moveDown,
      'ArrowLeft': this.moveLeft,
      'ArrowRight': this.game.moveRight,
    };

    document.addEventListener('keydown', async ({ key }) => {
      if (key in actions) await actions[key]();
      this.renderTiles();
    });
  }

  private moveLeft = async () => {
    const tiles = this.view.getTilesList();
    const promises = tiles.filter(tile => tile.getValue()).map(tile => tile.slide('horizontal', -1));
    await Promise.all(promises);

    this.game.moveLeft();
  };


  private renderTiles() {
    this.view.renderTiles(this.game.getGrid());
  }

  render() {
    return this.view.render();
  }
}