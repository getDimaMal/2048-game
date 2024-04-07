import { Grid, Tile } from "src/components";


class GameView {
    private readonly grid: HTMLDivElement;
    private tilesList: Tile[] = [];

    constructor() {
        this.grid = new Grid().render();
    }

    private setTilesList(field: number[]) {
        this.tilesList = [];
        field.forEach(value => this.tilesList.push(new Tile({ value })));
    }

    getTilesList() {
        return this.tilesList;
    }

    renderTiles(field: number[]) {
        this.setTilesList(field);

        this.grid.innerHTML = "";
        this.tilesList.forEach(tile => this.grid.append(tile.render()));
    }

    render() {
        return this.grid;
    }
}

export default GameView;