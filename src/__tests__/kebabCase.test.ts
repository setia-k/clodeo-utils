import kebabCase from '../kebabCase';

describe('kebabCase', () => {
  it('should convert string to kebab case', () => {
    expect(kebabCase('John Doe')).toBe('john-doe');
    expect(kebabCase('HelloWorld123')).toBe('hello-world123');
    expect(kebabCase('Lorem Ipsum Dolor')).toBe('lorem-ipsum-dolor');
    expect(kebabCase('123HelloWorld')).toBe('123-hello-world');
  });

  // ignore lint warning as it's intentional
  it('should return empty string for falsy values', () => {
    expect(kebabCase('')).toBe('');
    expect(kebabCase(null as any)).toBe('');
    expect(kebabCase(undefined as any)).toBe('');
  });
});
