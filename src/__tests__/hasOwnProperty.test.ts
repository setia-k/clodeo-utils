import hasOwnProperty from '../hasOwnProperty';

describe('hasOwnProperty', () => {
  describe('should return true if object has key', () => {
    it('should return true if object has key', () => {
      expect(hasOwnProperty({ a: 1 }, 'a')).toBe(true);
    });
  });

  describe('should return false if object does not have key', () => {
    it('should return false if object does not have key', () => {
      expect(hasOwnProperty({ a: 1 }, 'b')).toBe(false);
    });
  });

  describe('should return false if object is falsy', () => {
    it('should return false if object is falsy', () => {
      expect(hasOwnProperty(null as any, 'a')).toBe(false);
      expect(hasOwnProperty(undefined as any, 'a')).toBe(false);
    });
  });
});
