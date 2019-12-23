export function identity<T>(arg: T): T {
  return arg;
}

export function addText(text: string): void {
  const el = document.createElement('div');
  el.innerHTML = text;
  document.body.appendChild(el);
}

addText('hey');
