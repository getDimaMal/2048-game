import Grid from './Grid';

describe('Grid', () => {
  it('should render component', () => {
    const grid = new Grid().render();

    expect(grid.tagName).toBe('DIV');
    expect(grid.classList.contains('grid')).toBe(true);
  });
});
