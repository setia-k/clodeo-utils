// TODO: Add jsdoc description
// TODO: extract helper function
/**
 * Please add a proper jsdoc, extract helper function and add tests if possible
 */
function cartesian(...args: any[][]) {

  function helper(arr: any[], i: number) {
    for (let j = 0, l = args[i].length; j < l; j++) {
      const a = arr.slice(0); // clone arr
      a.push(args[i][j]);
      if (i == max)
        r.push(a);
      else
        helper(a, i + 1);
    }
  }

  const r: any[] = [], max = args.length - 1;
  helper([], 0);

  return r;
}

export default cartesian;
