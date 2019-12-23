import sum from './deps';

export function identity<T>(arg: T): T {
  return arg;
}

const fun = (arg: number): number => arg;
export function addText(text: string): void {
  const el = document.createElement('div');
  el.innerHTML = text + sum(2, fun(3));
  document.body.appendChild(el);
}

const result = identity('HEY');

addText(result.toLowerCase());
