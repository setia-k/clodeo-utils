import debounce from '../debounce';

jest.useFakeTimers();

describe('debounce', () => {
  let func: jest.Mock;
  let options: any;
  let timeout: number;

  beforeEach(() => {
    func = jest.fn();
    options = { leading: false, trailing: true };
    timeout = 100;
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('should only invoke the function once after the specified time has passed', () => {
    debounce(func, timeout, options);
    debounce(func, timeout, options);
    debounce(func, timeout, options);

    jest.advanceTimersByTime(timeout);

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should invoke the function immediately when "leading" option is set to true', () => {
    options.leading = true;
    debounce(func, timeout, options);

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not invoke the function immediately when "leading" option is set to false', () => {
    options.leading = false;
    debounce(func, timeout, options);

    expect(func).toHaveBeenCalledTimes(0);
  });

  it('should invoke the function at the end of the debouncing period when "trailing" option is set to true', () => {
    options.trailing = true;
    debounce(func, timeout, options);

    jest.advanceTimersByTime(timeout);

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not invoke the function at the end of the debouncing period when "trailing" option is set to false', () => {
    options.trailing = false;
    debounce(func, timeout, options);

    jest.advanceTimersByTime(timeout);

    expect(func).toHaveBeenCalledTimes(1);
  });
});
