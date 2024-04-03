import './styles/main.scss';
import Grid from './components/Grid';
import Tile from './components/Tile';
import { GameModel } from './app/models/game.model';
import { GameController } from './app/controllers/game.controller';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    const grid = new Grid().render();

    const game = new GameController(new GameModel());

    for (const row of game.getGrid()) {
        for (const value of row) {
            grid.append(new Tile({ value }).render());
        }
    }

    root.append(grid);
});