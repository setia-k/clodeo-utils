import validate from '../passwordValidation';

describe('passwordValidation', () => {

  describe('should return flag(s) TRUE', () => {
    it('should return all flag TRUE', () => {
      expect(validate('Aa1#')).toEqual({
        uppercase: true,
        lowercase: true,
        number: true,
        character: true,
      });
    });

    it('should return only uppercase flag TRUE', () => {
      expect(validate('A')).toEqual({
        uppercase: true,
        lowercase: false,
        number: false,
        character: false,
      });
    });

    it('should return only lowercase flag TRUE', () => {
      expect(validate('a')).toEqual({
        uppercase: false,
        lowercase: true,
        number: false,
        character: false,
      });
    });

    it('should return only number flag TRUE', () => {
      expect(validate('1')).toEqual({
        uppercase: false,
        lowercase: false,
        number: true,
        character: false,
      });
    });

    it('should return only number flag TRUE with number as value', () => {
      expect(validate(1 as any)).toEqual({
        uppercase: false,
        lowercase: false,
        number: true,
        character: false,
      });
    });

    it('should return only character flag TRUE', () => {
      expect(validate('#')).toEqual({
        uppercase: false,
        lowercase: false,
        number: false,
        character: true,
      });
    });
  });

  describe('should return all flag FALSE', () => {
    it('empty string', () => {
      expect(validate('')).toEqual({
        uppercase: false,
        lowercase: false,
        number: false,
        character: false,
      });
    });

    it('value is falsy', () => {
      expect(validate(undefined as any)).toEqual({
        uppercase: false,
        lowercase: false,
        number: false,
        character: false,
      });
      expect(validate(null as any)).toEqual({
        uppercase: false,
        lowercase: false,
        number: false,
        character: false,
      });
    });
  });
});
