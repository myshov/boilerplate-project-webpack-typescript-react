import sum from './deps';

function identity<T>(arg: T): T {
  return arg;
}

export { sum, identity };
