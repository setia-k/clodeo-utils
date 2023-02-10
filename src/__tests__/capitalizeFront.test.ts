import capitalizeFront from '../capitalizeFront';

describe('capitalizeFront', () => {
  it('should capitalize the first letter of the text', () => {
    const input = 'hello world';
    const expectedOutput = 'Hello world';

    expect(capitalizeFront(input)).toBe(expectedOutput);
  });

  it('should return an empty string if the input text is an empty string', () => {
    const input = '';
    const expectedOutput = '';

    expect(capitalizeFront(input)).toBe(expectedOutput);
  });

  it('should return the same capitalized letter if the input text is a single letter', () => {
    const input = 'a';
    const expectedOutput = 'A';

    expect(capitalizeFront(input)).toBe(expectedOutput);
  });
});
