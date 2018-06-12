import selectionSort from '..';

const compare = (a, b) => a - b;

describe('selection sort', () => {
  it('should sort random array', () => {
    const arr = [0, -1, 2, 11, -5, 9, -1];
    const sorted = selectionSort(arr);
    arr.sort(compare);
    expect(sorted).toEqual(arr);

    const arr2 = [];
    for (let i = 0; i < 100; i++) {
      arr2.push(Math.random() * 100 - 50);
    }
    const sorted2 = selectionSort(arr2);
    arr2.sort(compare);
    expect(sorted2).toEqual(arr2);
  });
});
