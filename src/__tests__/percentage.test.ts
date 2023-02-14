import percentage from '../percentage';

describe('percentage', () => {
  describe('should return percentage', () => {
    it('value > total', () => {
      expect(percentage(100, 50)).toBe(200);
    });
    it('value < total', () => {
      expect(percentage(50, 100)).toBe(50);
    });
    it('value === total', () => {
      expect(percentage(100, 100)).toBe(100);
    });
  });

  describe('should return 0 with falsy value', () => {
    it('value is falsy', () => {
      expect(percentage(0, 0)).toBe(0);
      expect(percentage(null as any, 0)).toBe(0);
      expect(percentage(undefined as any, 0)).toBe(0);
      expect(percentage(0, null as any)).toBe(0);
      expect(percentage(0, undefined as any)).toBe(0);
      expect(percentage(null as any, null as any)).toBe(0);
      expect(percentage(undefined as any, undefined as any)).toBe(0);
    });
  });
});
