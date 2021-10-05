let array = [4, 8, 2, 1, 5, 7, 6, 3];

function pivot(array) {
  let start = 0;
  let end = array.length + 1;
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

console.log(pivot(array));
