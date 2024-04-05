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

  getValue() {
    return this.props.value;
  }

  async slide(direction: 'horizontal' | 'vertical', shift: number) {
    const time = 100;
    const axis = direction === 'horizontal' ? 'X' : 'Y';
    const getTranslate = (value: number) => `translate${axis}(${value}px)`;

    return new Promise((resolve) => {
      this.tile.style.setProperty('--time', `${time}ms`);
      this.tile.style.setProperty('--from', getTranslate(0));
      this.tile.style.setProperty('--to', getTranslate((100 + 10) * shift));
      this.tile.classList.add('slide');

      setTimeout(() => {
        this.tile.removeAttribute('stile');
        resolve(null);
      }, time);
    });
  }

  render() {
    return this.tile;
  }
}