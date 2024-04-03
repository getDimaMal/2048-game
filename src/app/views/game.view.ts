import Grid from '../../components/Grid';
import Tile from '../../components/Tile';

export class GameView {
  private readonly grid: HTMLDivElement;

  constructor() {
    this.grid = new Grid().render();
  }

  setTiles(grid: number[][]) {
    this.grid.innerHTML = '';

    for (const row of grid) {
      for (const value of row) {
        this.grid.append(new Tile({ value }).render());
      }
    }
  }

  render() {
    return this.grid;
  }
}