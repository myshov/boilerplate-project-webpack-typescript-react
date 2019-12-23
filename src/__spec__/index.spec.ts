import { identity } from '../index';

it('returns passed argument', () => {
  expect(identity(1)).toBe(1);
});
