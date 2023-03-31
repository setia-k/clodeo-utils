## Dev Installation
1. Clone repo
2. `npm i` or `npm install

## How to publish
1. commit and push all changes
2. merge to main
3. login to npm `npm login`
4. update version number
   - use `npm version patch` or `npm version minor` or `npm version major`
   - update manually in `package.json`
5. `npm publish`

## Helper Script
### - functionAdd
Create a new template .ts file in the `src/` and .test.ts file in the `src/__tests__`
with the given name.

Usage: Use linux/wsl and run `./functionAdd.sh fileName`

### - functionRemove
Remove both .ts and .test.ts files in the `src/` and `src/__tests__` directories

Usage: Use linux/wsl and run `./functionRemove.sh fileName`

### - functionExport
Generate `index.ts` in `src/` exporting all function files in the directory

Usage: Use linux/wsl and run `./functionExport.sh`
