import './grid.scss';

export class Grid {
    private readonly grid: HTMLDivElement;

    constructor() {
        this.grid = document.createElement('div');
        this.grid.classList.add('grid');
    }

    render() {
        return this.grid;
    }
}