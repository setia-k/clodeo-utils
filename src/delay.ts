/**
 * setTimeout wrapped with promise
 * @param ms {number}
 * @returns {Promise<void>}
 */
function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default delay;
