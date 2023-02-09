import capitalizeWords from '../capitalizeWords';

describe('capitalizeWords', () => {
  it('should capitalize the first letter of each word in the text', () => {
    const input = 'hello world 123!';
    const expectedOutput = 'Hello World 123!';

    expect(capitalizeWords(input)).toBe(expectedOutput);
  });

  it('should return an empty string if the input text is an empty string', () => {
    const input = '';
    const expectedOutput = '';

    expect(capitalizeWords(input)).toBe(expectedOutput);
  });

  it('should capitalize the first letter of a single word in the text', () => {
    const input = 'lorem';
    const expectedOutput = 'Lorem';

    expect(capitalizeWords(input)).toBe(expectedOutput);
  });
});
