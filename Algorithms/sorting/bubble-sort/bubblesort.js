let array = [1, 2, 5, 3, 8, 12, 11, 19, 33, 30, 80, 20, 29];

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        console.log(array);
      }
    }
  }
  console.log(array);
}

bubbleSort(array);
