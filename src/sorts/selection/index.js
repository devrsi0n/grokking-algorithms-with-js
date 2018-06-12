function findSmallest(arr) {
  let smallestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[smallestIndex]) {
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

/**
 * Selection sort, O(n^2)
 *
 * @param {Array} cloneArr
 * @returns {Array}
 */
export default function selectionSort(arr) {
  const cloneArr = JSON.parse(JSON.stringify(arr));
  const sortedArr = [];
  const len = cloneArr.length;
  for (let i = 0; i < len; i++) {
    const index = findSmallest(cloneArr);
    sortedArr.push(cloneArr[index]);
    cloneArr.splice(index, 1);
  }

  return sortedArr;
}
