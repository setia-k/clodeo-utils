import getInitialName from '../getInitialName';

describe('getInitialName', () => {
  describe('should return initial name', () => {
    it('should return initial name for single word', () => {
      expect(getInitialName('John')).toBe('J');
    });

    it('should return initial name for two words', () => {
      expect(getInitialName('John Doe')).toBe('JD');
    });

    it('should return initial name for three words', () => {
      expect(getInitialName('John Doe Smith')).toBe('JD');
    });
  });

  describe('should return empty string for non-string and falsyvalues', () => {
    it('should return empty string for non-string values', () => {
      expect(getInitialName(null as any)).toBe('');
      expect(getInitialName(undefined as any)).toBe('');
      expect(getInitialName(123 as any)).toBe('');
    });

    it('should return empty string for empty values', () => {
      expect(getInitialName('')).toBe('');
    });
  });

});
