import "./grid.scss";


class Grid {
    private readonly grid: HTMLDivElement;

    constructor() {
        this.grid = document.createElement("div");
        this.grid.classList.add("grid");
    }

    render() {
        return this.grid;
    }
}

export default Grid;