import { test, expect } from '@jest/globals';
import { getResult } from '../src/main.js';

test('half', () => {
  expect(getResult()).toEqual(true);
});
