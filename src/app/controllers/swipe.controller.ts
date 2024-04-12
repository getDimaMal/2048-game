class SwipeController {
  private startX = 0;
  private startY = 0;
  private actions = {
    ArrowUp: () => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' })),
    ArrowDown: () => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' })),
    ArrowLeft: () => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' })),
    ArrowRight: () => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' })),
  };

  constructor() {
    this.addEventListener();
  }

  private addEventListener() {
    document.addEventListener('touchstart', this.handleTouchStart, false);
    document.addEventListener('touchend', this.handleTouchEnd, false);
  }

  private handleTouchStart = (event: TouchEvent) => {
    const touch = event.touches[0];
    this.startX = touch.clientX;
    this.startY = touch.clientY;
  };

  private handleTouchEnd = (event: TouchEvent) => {
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - this.startX;
    const deltaY = touch.clientY - this.startY;

    if (Math.abs(deltaX) < Math.abs(deltaY)) {
      if (deltaY < 0) this.actions['ArrowUp']();
      else this.actions['ArrowDown']();
    } else {
      if (deltaX < 0) this.actions['ArrowLeft']();
      else this.actions['ArrowRight']();
    }
  };
}

export default SwipeController;
