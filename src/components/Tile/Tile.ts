import './tile.scss';

interface CellProps {
  value: number;
}

export class Tile {
  private readonly tile: HTMLDivElement;

  constructor(private props: CellProps) {
    this.tile = document.createElement('div');

    this.setValue();
    this.setClasses();
  }

  private setValue() {
    this.tile.innerText = String(this.props.value || '');
  }

  private setClasses() {
    this.tile.classList.add('tile');
    if (this.props.value === 0) this.tile.classList.add('empty');
  }

  render() {
    return this.tile;
  }
}