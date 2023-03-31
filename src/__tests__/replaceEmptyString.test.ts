import replaceEmptyString from '../replaceEmptyString';

describe('replaceEmptyString', () => {

  describe('should return str', () => {
    it('string input', () => {
      expect(replaceEmptyString('John', '-')).toBe('John');
      expect(replaceEmptyString('12', '-')).toBe('12');
    });

    it('non string input', () => {
      expect(replaceEmptyString(0, '-')).toBe('0');
      expect(replaceEmptyString(4.5, '-')).toBe('4.5');
    });
  });

  describe('should return placeholder if str is invalid', () => {
    it('empty string input', () => {
      expect(replaceEmptyString('', '-')).toBe('-');
    });

    it('invalid input', () => {
      expect(replaceEmptyString(null, '-')).toBe('-');
      expect(replaceEmptyString(undefined, '-')).toBe('-');
    });
  });
});
