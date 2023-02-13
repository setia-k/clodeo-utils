# Test Todo
Ideally all functions should have a proper test.
However, not every function have a test case due to at least one of the following reasons:
  * Some functions are too complex to test or untestable by jest.
  * Time constraint.

Functions that have no test yet are marked by `TODO`
in their respective test file and are skipped when the test was ran.

## Functions that might be untestable
- `downloadFile`, needs a browser to test.
- `getIndonesianTimezone`, while testable, it will always return the same result since it uses system time.
- `parseJwt`, needs a browser to test.
- `parseQuery`, needs a browser to test.
- `scrollTo`, needs a browser to test.
