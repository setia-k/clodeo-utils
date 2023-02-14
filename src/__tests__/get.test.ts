import get from '../get';

describe('get', () => {
  describe('should return value from object', () => {
    it('should return value from object without depth', () => {
      expect(get({ a: 1 }, 'a')).toBe(1);
    });

    it('should return value from object with depth 1', () => {
      expect(get({ a: { b: 1 } }, 'a.b')).toBe(1);
    });

    it('should return value from object with depth 2', () => {
      expect(get({ a: { b: { c: [1, 2] } } }, 'a.b.c')).toStrictEqual([1, 2]);
    });
  });

  describe('should return undefined for non-existing values', () => {
    expect(get({ a: 1 }, '')).toBe(undefined);
    expect(get({ a: 1 }, 'a.b')).toBe(undefined);
  });

  describe('falsy values', () => {
    it('should return undefined for falsy values', () => {
      expect(get(null as any, 'a')).toBe(null);
      expect(get(undefined as any, 'a')).toBe(undefined);
    });
  });

});
