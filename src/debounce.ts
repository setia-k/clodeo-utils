type Options = {
  leading?: boolean;
  trailing?: boolean;
};

let debounceTimeout: NodeJS.Timeout | undefined;

/**
 * create debounced function that delays receiving a call until after a specified time has passed.
 * @param func {() => void} function to debounce
 * @param timeout {number | undefined} time in milliseconds
 * @param options {Options} options leading and trailing
 */
function debounce(func: () => void, timeout: number | undefined, options?: Options): void {
  const { leading = false, trailing = true } = options || {};
  if (debounceTimeout) {
    if (!leading && !trailing) {
      func();
    }

    if (!trailing) {
      return;
    }

    clearTimeout(debounceTimeout);
    debounceTimeout = undefined;
  }

  if (leading && !debounceTimeout) {
    func();
  }

  debounceTimeout = setTimeout(trailing ? func : () => {
    clearTimeout(debounceTimeout);
    debounceTimeout = undefined;
  }, timeout);
}

export default debounce;
