import binarySearch from '..';

describe('binary-search', () => {
  it('should find target position', () => {
    let arr = [1, 2, 3];
    expect(binarySearch(arr, 1)).toBe(0);
    expect(binarySearch(arr, 3)).toBe(2);
    expect(binarySearch(arr, null)).toBe(-1);

    arr = [];
    const len = 10000000;
    for (let i = 0; i < len; i++) {
      arr.push(i);
    }
    expect(binarySearch(arr, len - 1)).toBe(len - 1);
  });
});
