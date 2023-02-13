#!/bin/bash
# Accepts a fileName as an argument
# Usage: ./functionAdd.sh [fileName]
# Creates a new .ts file in src/ and a new .test.ts file in src/__tests__/
# File is created with a function template and a test template

fileName=$1

if [ -f src/$fileName.ts ]; then
  echo "File already exists"
  exit 1
fi

# .ts template
echo "/**
 *
 * @param
 * @returns
 */
function $fileName() {
  return null;
}

export default $fileName;" > src/$fileName.ts

# test template
echo "
describe.skip('$fileName', () => {
  // TODO: implement test, remove .skip
  it('', () => {
    //
  });
});" > src/__tests__/$fileName.test.ts
