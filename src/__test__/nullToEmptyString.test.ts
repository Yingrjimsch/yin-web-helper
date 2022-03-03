import { nullToEmptyString } from '../form-helper';

test('nullToEmptyString with valid null value', () => expect(nullToEmptyString(null)).toBe(''));
test('nullToEmptyString with not empty string', () => expect(nullToEmptyString('test')).toBe('test'));
test('nullToEmptyString with already empty string', () => expect(nullToEmptyString('')).toBe(''));
test('nullToEmptyString with string contains text null', () => expect(nullToEmptyString('null')).toBe('null'));
test('nullToEmptyString with string contains text null not to be null', () =>
  expect(nullToEmptyString('null')).not.toBe(null));
test('nullToEmptyString with number', () => expect(nullToEmptyString(42)).toBe(42));
test('nullToEmptyString check typeconversion', () => expect(nullToEmptyString(42)).not.toBe('42'));
