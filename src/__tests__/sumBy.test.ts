import sumBy from '../sumBy';

describe('sumBy', () => {
  const arrayOfObj = [
    { n: 4, x: 10 },
    { n: 2, x: 20 },
    { n: 3, x: 30 },
    { n: 1, x: 40 },
  ];

  describe('perform sumBy on an array of object', () => {
    it('Should sum content with specified keys ', () => {
      const expectedN = 10;
      const expectedX = 100;

      expect(sumBy(arrayOfObj, (o: any) => o.n)).toBe(expectedN);
      expect(sumBy(arrayOfObj, (o: any) => o.x)).toBe(expectedX);
    });
  });

  describe('return 0 for falsy value or none existing key', () => {
    it('Should return 0 for falsy value', () => {
      const expected = 0;
      expect(sumBy(null, (o: any) => o.n)).toBe(expected);
      expect(sumBy(undefined, (o: any) => o.n)).toBe(expected);
      expect(sumBy([], (o: any) => o.n)).toBe(expected);
    });

    it('Should return 0 for none existing key', () => {
      const expected = 0;
      expect(sumBy(arrayOfObj, (o: any) => o.y)).toBe(expected);
    });
  });

});
