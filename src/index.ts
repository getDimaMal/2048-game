import './styles/main.scss';
import Grid from './components/Grid';
import Tile from './components/Tile';

const grid = [
    [2, 4, 0, 4],
    [0, 2, 0, 4],
    [0, 4, 0, 0],
    [0, 8, 0, 2],
];

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const gridContainer = new Grid().render();

    for (const row of grid) {
        for (const value of row) {
            gridContainer.append(new Tile({ value }).render());
        }
    }

    root.append(gridContainer);
});