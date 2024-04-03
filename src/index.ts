import './styles/main.scss';
import Grid from './components/Grid';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const grid = new Grid();

    root.append(grid.render());
});