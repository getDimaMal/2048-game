import './tile.scss';

interface CellProps {
  value: number;
}

export class Tile {
  private readonly cell: HTMLDivElement;

  constructor(private props: CellProps) {
    this.cell = document.createElement('div');

    this.setValue();
    this.setClasses();
  }

  private setValue() {
    this.cell.innerText = String(this.props.value || '');
  }

  private setClasses() {
    this.cell.classList.add('cell');
    if (this.props.value === 0) this.cell.classList.add('empty');
  }

  render() {
    return this.cell;
  }
}