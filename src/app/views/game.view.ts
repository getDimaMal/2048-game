import Grid from '../../components/Grid';
import Tile from '../../components/Tile';

export class GameView {
  private readonly grid: HTMLDivElement;
  private tilesList: Tile[];

  constructor() {
    this.grid = new Grid().render();
  }

  private setTilesList(grid: number[][]) {
    this.tilesList = [];

    for (const row of grid) {
      for (const value of row) {
        this.tilesList.push(new Tile({ value }));
      }
    }
  }

  renderTiles(grid: number[][]) {
    this.setTilesList(grid);

    this.grid.innerHTML = '';
    this.tilesList.forEach(tile => this.grid.append(tile.render()));
  }

  render() {
    return this.grid;
  }
}