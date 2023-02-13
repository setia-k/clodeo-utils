interface parseQueryOptions {
  keysToParseInt?: string[];
}

const defaultParseQueryOptions: parseQueryOptions = {
  keysToParseInt: ['limit', 'offset'],
};

/**
 * Parses a query string into an object
 * @param subject {string} Query string to be parsed
 * @param options {parseQueryOptions} Options to be used when parsing the query string
 * @returns object containing parsed query
 */
function parseQuery(subject: string, options: parseQueryOptions = defaultParseQueryOptions) {
  const { keysToParseInt } = options;

  let results: any = {};

  if (subject) {
    results = Object.fromEntries(new URLSearchParams(subject));

    Object.keys(results).forEach(key => {
      if (results[key] === 'undefined' || results[key] === 'null' || results[key] === 'NaN') {
        delete results[key];
      }

      if (results[key] === 'true') {
        results[key] = true;
      }

      if (results[key] === 'false') {
        results[key] = false;
      }

      if (keysToParseInt?.includes(key)) {
        results[key] = parseInt(results[key]);
      }

    });
  }

  return results;
}

export default parseQuery;
