// 创建 SVG 元素
export function createSVGElement(type) {
  return document.createElementNS('http://www.w3.org/2000/svg', type);
}

// 将 child 节点挂载到 parent 节点上面
export function mount(parent, child) {
  if (parent) {
    parent.appendChild(child);
  }
}

export function applyAttributes(element, attributes) {
  for (const [key, value] of Object.entries(attributes)) {
    // 这里需要把类似 strokeWidth 的属性转换成 stroke-width 的形式
    // 思路就是将大写字母替成 - + 对应的小写字母的形式
    // 下面涉及到正则匹配，不太了解的同学可以去下面的链接学习：
    // https://juejin.cn/post/6844903487155732494
    const kebabCaseKey = key.replace(/[A-Z]/g, (d) => `-${d.toLocaleLowerCase()}`);
    element.setAttribute(kebabCaseKey, value);
  }
}

export function applyTransform(element, transform) {
  // 现获取旧 transform 属性值；
  const oldTransform = element.getAttribute('transform') || '';
  const prefix = oldTransform ? `${oldTransform} ` : '';
  // 新旧拼接后设置为新值
  element.setAttribute('transform', `${prefix}${transform}`);
}
