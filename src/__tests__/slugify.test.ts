import slugify from '../slugify';

describe('slugify', () => {
  describe('should return slugified text', () => {
    it('should return slugified text', () => {
      expect(slugify('abc')).toBe('abc');
      expect(slugify('abc def')).toBe('abc-def');
      expect(slugify('abc def xyz')).toBe('abc-def-xyz');
    });

    it('should return slugified text with special characters', () => {
      expect(slugify('abc def xyz &')).toBe('abc-def-xyz-and-');
      expect(slugify('abc def xyz & 123')).toBe('abc-def-xyz-and-123');
    });
  });
});
