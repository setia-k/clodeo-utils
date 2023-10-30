import removeArrayDuplicates from '../removeArrayDuplicates';

describe('removeArrayDuplicates', () => {

  describe('Normal Usage', () => {
    it('remove duplicate numbers', () => {
      const input = [1, 2, 3, 1, 2, 4];
      const output = removeArrayDuplicates(input);
      const expected = [1, 2, 3, 4];

      expect(output).toEqual(expected);
    });

    it('should remove duplicate strings', () => {
      const input = ['apple', 'orange', 'apple'];
      const output = removeArrayDuplicates(input);
      const expected = ['apple', 'orange'];

      expect(output).toEqual(expected);
    });

    it('should remove objects with duplicate key value', () => {
      const input = [
        { id: 1, name: 'Anteraja' },
        { id: 1, name: 'anteraja' },
        { id: 2, name: 'sicepat' }
      ];
      const output = removeArrayDuplicates(input, ['id']);
      const expected = [
        { id: 1, name: 'Anteraja' },
        { id: 2, name: 'sicepat' }
      ];

      expect(output).toEqual(expected);
    });

    it('should remove objects with 2 matching keys value', () => {
      const input = [
        { id: '1', name: 'Anteraja' },
        { id: '1', name: 'anteraja' }, // Not removed because name doesn't match
        { id: '3', name: 'Anteraja' }, // Not removed because id doesn't match
        { id: '1', name: 'Anteraja' }, // value of keys id and name match, will be removed
        { id: '2', name: 'sicepat' }
      ];
      const output = removeArrayDuplicates(input, ['id', 'name']);
      const expected = [
        { id: '1', name: 'Anteraja' },
        { id: '1', name: 'anteraja' },
        { id: '3', name: 'Anteraja' },
        { id: '2', name: 'sicepat' }
      ];

      expect(output).toEqual(expected);
    });
  });

  describe('Edge Cases', () => {
    it('should return empty array for an empty input', () => {
      const output = removeArrayDuplicates([]);
      const expected: Array<unknown> = [];

      expect(output).toEqual(expected);
    });

    it('should handle arrays with null values', () => {
      const input = [1, null, 2, null, 3];
      const output = removeArrayDuplicates(input);
      const expected = [1, null, 2, 3];

      expect(output).toEqual(expected);
    });

    it('should handle arrays with undefined values', () => {
      const input = [1, undefined, 2, undefined, 3];
      const output = removeArrayDuplicates(input);
      const expected = [1, undefined, 2, 3];

      expect(output).toEqual(expected);
    });

    it('should return an empty array if the input is null', () => {
      const output = removeArrayDuplicates(null as unknown as any[]);
      const expected: Array<unknown> = [];

      expect(output).toEqual(expected);
    });

    it('should return an empty array if the input is undefined', () => {
      const output = removeArrayDuplicates(undefined as unknown as any[]);
      const expected: Array<unknown> = [];

      expect(output).toEqual(expected);
    });

    it('should handle undefined keyToWatch gracefully', () => {
      const input = [
        { id: '1', name: 'Anteraja' },
        { id: '1', name: 'Anteraja' }
      ];
      const output = removeArrayDuplicates(input);
      const expected = [
        { id: '1', name: 'Anteraja' },
        { id: '1', name: 'Anteraja' }
      ];

      expect(output).toEqual(expected);
    });
  });
});
