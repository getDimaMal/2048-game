class SwipeController {
    private startX = 0;
    private startY = 0;

    constructor() {
        this.addEventListener();
    }

    private addEventListener() {
        document.addEventListener("touchstart", this.handleTouchStart, false);
        document.addEventListener("touchend", this.handleTouchEnd, false);
    }

    private handleTouchStart = (event: TouchEvent) => {
        const touch = event.touches[0];
        this.startX = touch.clientX;
        this.startY = touch.clientY;
    };

    private handleTouchEnd = (event: TouchEvent) => {
        const touch = event.changedTouches[0];
        const endX = touch.clientX;
        const endY = touch.clientY;

        const deltaX = endX - this.startX;
        const deltaY = endY - this.startY;

        if (Math.abs(deltaX) < Math.abs(deltaY)) {
            if (deltaY < 0) document.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowUp" }));
            else document.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown" }));
        } else {
            if (deltaX < 0) document.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft" }));
            else document.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight" }));
        }
    };
}

export default SwipeController;