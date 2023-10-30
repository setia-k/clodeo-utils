import sortObjectArrayByKeys from '../sortObjectArrayByKeys';

describe('sortObjectArrayByKeys', () => {
  describe('Normal Cases String', () => {
    describe('should sort objects in correct order using single key', () => {
      const input = [
        { group: 'tokopedia' },
        { group: 'shopee' },
        { group: 'alibaba' }
      ];

      const expectedAsc = [
        { group: 'alibaba' },
        { group: 'shopee' },
        { group: 'tokopedia' }
      ];
      const expectedDesc = [
        { group: 'tokopedia' },
        { group: 'shopee' },
        { group: 'alibaba' },
      ];

      const resultAsc = sortObjectArrayByKeys(input, ['group'], 'asc');
      const resultDesc = sortObjectArrayByKeys(input, ['group'], 'desc');

      it('ascending', () => expect(resultAsc).toEqual(expectedAsc));
      it('descending', () => expect(resultDesc).toEqual(expectedDesc));
    });

    it('should sort objects based on multiple keys', () => {
      const input = [
        { group: 'tokopedia', name: 'devc' },
        { group: 'tokopedia', name: 'choi' },
        { group: 'shopee', name: 'devc' }
      ];
      const expected = [
        { group: 'shopee', name: 'devc' },
        { group: 'tokopedia', name: 'choi' },
        { group: 'tokopedia', name: 'devc' }
      ];
      const result = sortObjectArrayByKeys(input, ['group', 'name'], 'asc');
      expect(result).toEqual(expected);
    });

    it('should be case-insensitive when sorting strings', () => {
      const input = [
        { group: 'TOKOPEDIA' },
        { group: 'shopee' },
        { group: 'Alibaba' }
      ];
      const expected = [
        { group: 'Alibaba' },
        { group: 'shopee' },
        { group: 'TOKOPEDIA' }
      ];
      const result = sortObjectArrayByKeys(input, ['group'], 'asc');
      expect(result).toEqual(expected);
    });
  });

  describe('Normal Cases Number', () => {
    describe('Correctly sort number', () => {
      const input = [
        { id: 3 },
        { id: 1 },
        { id: 2 },
      ];

      const expectedAsc = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ];
      const expectedDesc = [
        { id: 3 },
        { id: 2 },
        { id: 1 },
      ];

      const resultAsc = sortObjectArrayByKeys(input, ['id'], 'asc');
      const resultDesc = sortObjectArrayByKeys(input, ['id'], 'desc');

      it('ascending', () => expect(resultAsc).toEqual(expectedAsc));
      it('descending', () => expect(resultDesc).toEqual(expectedDesc));
    });

    describe('should sort objects based on multiple keys', () => {
      const input = [
        { id: 1, group: 1 },
        { id: 3, group: 1 },
        { id: 2, group: 1 },
        { id: 1, group: 2 },
        { id: 3, group: 2 },
      ];

      const expectedIG = [
        { id: 1, group: 1 },
        { id: 1, group: 2 },
        { id: 2, group: 1 },
        { id: 3, group: 1 },
        { id: 3, group: 2 },
      ];
      const expectedGI = [
        { id: 1, group: 1 },
        { id: 2, group: 1 },
        { id: 3, group: 1 },
        { id: 1, group: 2 },
        { id: 3, group: 2 },
      ];
      const resultIG = sortObjectArrayByKeys(input, ['id', 'group'], 'asc');
      const resultGI = sortObjectArrayByKeys(input, ['group', 'id'], 'asc');
      it('id, group', () => expect(expectedIG).toEqual(resultIG));
      it('group, id', () => expect(expectedGI).toEqual(resultGI));
    });
  });

  describe('Mixed key type of number and string', () => {
    const input = [
      { group: 1, name: 'A' },
      { group: 1, name: 'B' },
      { group: 2, name: 'A' },
      { group: 2, name: 'B' },
      { group: 3, name: 'A' },
      { group: 3, name: 'B' },
      { group: 1, name: 'C' },
    ];

    const expectedGN = [
      { group: 1, name: 'A' },
      { group: 1, name: 'B' },
      { group: 1, name: 'C' },
      { group: 2, name: 'A' },
      { group: 2, name: 'B' },
      { group: 3, name: 'A' },
      { group: 3, name: 'B' },
    ];
    const expectedNG = [
      { group: 1, name: 'A' },
      { group: 2, name: 'A' },
      { group: 3, name: 'A' },
      { group: 1, name: 'B' },
      { group: 2, name: 'B' },
      { group: 3, name: 'B' },
      { group: 1, name: 'C' },
    ];

    const resultGN = sortObjectArrayByKeys(input, ['group', 'name'], 'asc');
    const resultNG = sortObjectArrayByKeys(input, ['name', 'group'], 'asc');

    it('number, string', () => expect(resultGN).toEqual(expectedGN));
    it('string, number', () => expect(resultNG).toEqual(expectedNG));
  });

  describe('Negative Cases', () => {
    describe('should return an empty array when input', () => {
      const empty: any = [];
      const inputNull: any = null;
      const inputUndefined: any = undefined;

      const resultEmpty = sortObjectArrayByKeys(empty, ['group'], 'asc');
      const resultNull = sortObjectArrayByKeys(inputNull, ['group'], 'asc');
      const resultUndefined = sortObjectArrayByKeys(inputUndefined, ['group'], 'asc');

      it('is empty', () => expect(resultEmpty).toEqual([]));
      it('is null', () => expect(resultNull).toEqual([]));
      it('is undefined', () => expect(resultUndefined).toEqual([]));
    });

    it('should return the original array when given an empty keys array', () => {
      const input = [
        { group: 'tokopedia' },
        { group: 'shopee' }
      ];
      const result = sortObjectArrayByKeys(input, [], 'asc');
      expect(result).toEqual(input);
    });


  });
});
