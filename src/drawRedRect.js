export function drawRedRect(svg) {
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', 10);
  rect.setAttribute('y', 10);
  rect.setAttribute('width', 100);
  rect.setAttribute('height', 100);
  rect.setAttribute('fill', 'red');
  svg.appendChild(rect);
}
