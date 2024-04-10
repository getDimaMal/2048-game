export function getFullWidth(element: HTMLElement) {
  const computedStyle = window.getComputedStyle(element);

  const marginLeft = parseInt(computedStyle.marginLeft, 10);
  const marginRight = parseInt(computedStyle.marginRight, 10);
  const elementWidth = element.offsetWidth;

  return elementWidth + marginLeft + marginRight;
}
