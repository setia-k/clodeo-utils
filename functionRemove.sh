#!bin/bash
# Removes the .ts file in src/ and the .test.ts file in src/__tests__/
# Usage: ./functionRemove.sh [fileName]

fileName=$1

if [ -f src/$fileName.ts ]; then
  rm src/$fileName.ts
  rm src/__tests__/$fileName.test.ts
else
  echo "File does not exist"
  exit 1
fi
