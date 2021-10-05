let array = [12, 10, 4, 8, 2, 1, 5, 7, 6, 3];

function pivot(array, start = 0, end = array.length + 1) {
  let pivot = array[start];
  let swapIdx = start;
  function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
  }
  for (let i = start + 1; i < array.length; i++) {
    if (pivot > array[i]) {
      swapIdx++;
      swap(array, swapIdx, i);
    }
  }
  swap(array, start, swapIdx);
  return swapIdx;
}

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    //left
    quickSort(array, left, pivotIndex - 1);
    //right
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}

console.log(quickSort(array));
