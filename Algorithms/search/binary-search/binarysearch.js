function binarySearch(array, number) {
  let start = 0;
  let end = array.length - 1;
  let mid = 0;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    console.log(array);
    if (array[mid] == number) {
      return array[mid];
    } else if (number > array[mid]) {
      console.log(array.slice(mid + 1, end + 1));
      start = mid + 1;
    } else {
      console.log(array.slice(start, mid));
      end = mid - 1;
    }
  }

  return -1;
}

let array = [1, 3, 5, 7, 8, 9];

let sortedArray = array.sort();

console.log(binarySearch(array, 3));
