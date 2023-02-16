import delay from '../delay';

describe('delay', () => {
  it('delay resolves after the specified amount of time', async () => {
    const startTime = Date.now();
    const delayTime = 1000; // milliseconds
    await delay(delayTime);
    const endTime = Date.now();
    const elapsed = endTime - startTime;
    expect(elapsed).toBeGreaterThanOrEqual(delayTime);
  });
});
