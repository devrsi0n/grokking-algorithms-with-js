/**
 * Quick sort,O(nlogn)
 *
 * @param {Array} arr
 */
export default function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[0];
  const restArr = arr.slice(1);
  const less = [];
  const greater = [];
  for (const item of restArr) {
    if (item < pivot) {
      less.push(item);
    } else {
      greater.push(item);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}
