import toQueryString from '../toQueryString';

describe('toQueryString', () => {
  describe('Converts an object to a query string', () => {
    it('empty object to query string', () => {
      expect(toQueryString({})).toBe('');
    });

    it('1 key to query string', () => {
      expect(toQueryString({ userId: 1001 })).toBe('userId=1001');
    });

    it('multiple key to  query string', () => {
      expect(toQueryString({ a: 1, b: 2, c: 3 })).toBe('a=1&b=2&c=3');
    });
  });

  describe('Convert an object with various types to a query string', () => {
    it('Object with various types', () => {
      const obj = {
        a: '1',
        b: 2,
        c: true,
        d: [1, 2, 3],
        f: null,
        g: undefined,
      };
      const res = 'a=1&b=2&c=true&d=1,2,3&f=null&g=undefined';
      expect(toQueryString(obj)).toBe(res);
    });
  });

  describe('Value is falsy', () => {
    it('value is falsy', () => {
      expect(toQueryString(undefined as any)).toBe('');
      expect(toQueryString(null as any)).toBe('');
    });
  });

});
