import omit from '../omit';

describe('omit', () => {
  describe('should return object with omitted key(s)', () => {
    it('should return object with no keys omitted', () => {
      expect(omit({ a: 1, b: 2 }, '')).toStrictEqual({ a: 1, b: 2 });
      expect(omit({ a: 1, b: 2 }, [])).toStrictEqual({ a: 1, b: 2 });
    });

    it('should return object with 1 key omitted', () => {
      expect(omit({ a: 1, b: 2 }, 'a')).toStrictEqual({ b: 2 });
    });

    it('should return object with multiple keys omitted', () => {
      expect(omit({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'b', 'c'])).toStrictEqual({ d: 4 });
    });
  });

  describe('should return empty object if no object is specified or not of type object', () => {
    it('no object is specified', () => {
      expect(omit(null as any, [])).toStrictEqual({});
      expect(omit(undefined as any, [])).toStrictEqual({});
      expect(omit(1 as any, [])).toStrictEqual({});
      expect(omit(null as any, '')).toStrictEqual({});
      expect(omit(undefined as any, '')).toStrictEqual({});
      expect(omit(1 as any, '')).toStrictEqual({});
    });

    it('no object is specified, with keys specified', () => {
      expect(omit(null as any, ['a'])).toStrictEqual({});
      expect(omit(undefined as any, 'b')).toStrictEqual({});
      expect(omit(1 as any, 'c')).toStrictEqual({});
    });
  });

});
