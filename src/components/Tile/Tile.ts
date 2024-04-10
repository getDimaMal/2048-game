import { getFullWidth } from '../helpers';
import './tile.scss';

interface CellProps {
  value: number;
}

class Tile {
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
    const { value } = this.props;

    this.tile.classList.add('tile');

    if (value) this.tile.classList.add(`tile-${value < 2048 ? value : 2048}`);
    else this.tile.classList.add('empty');
  }

  getValue() {
    return this.props.value;
  }

  async slide(direction: 'horizontal' | 'vertical', shift: number) {
    const time = 124;
    const width = getFullWidth(this.tile);
    const axis = direction === 'horizontal' ? 'X' : 'Y';
    const getTranslate = (value: number) => `translate${axis}(${value}px)`;

    return new Promise(resolve => {
      this.tile.style.setProperty('--time', `${time}ms`);
      this.tile.style.setProperty('--from', getTranslate(0));
      this.tile.style.setProperty('--to', getTranslate(width * shift));
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

export default Tile;
