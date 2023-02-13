#!/bin/bash
# Export all functions in src/ based on the file name to src/index.ts
# Usage: ./functionExport.sh

if [ -f src/index.ts ]; then
  rm src/index.ts
fi

echo "// This file is automatically generated by exportIndex.sh" > src/index.ts

for file in src/*.ts; do
  fileName=$(basename $file .ts)
  if [ $fileName != "index" ]; then
    echo "export { default as $fileName } from './$fileName';" >> src/index.ts
  fi
done
