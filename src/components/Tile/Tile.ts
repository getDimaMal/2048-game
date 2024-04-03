import './tile.scss';

interface CellProps {
    value: number;
}

export class Tile {
    private readonly cell: HTMLDivElement;

    constructor(private props: CellProps) {
        const { value } = this.props;

        this.cell = document.createElement('div');
        this.cell.innerText = String(value || '');

        this.setClasses();
    }

    private setClasses() {
        this.cell.classList.add('cell');
        if (this.props.value === 0) this.cell.classList.add('empty');
    }

    render() {
        return this.cell;
    }
}