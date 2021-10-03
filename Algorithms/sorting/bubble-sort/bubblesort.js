let array = [9, 1, 2, 3, 4, 5, 6, 7, 8];

// //unoptimized version
// function bubbleSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length - 1; j++) {
//       console.log(array, array[j], array[j + 1]);
//       if (array[j] > array[j + 1]) {
//         [array[j], array[j + 1]] = [array[j + 1], array[j]];
//       }
//     }
//   }
// }

//optimized version
function bubbleSort(array) {
  let noSwap;
  for (let i = 0; i < array.length; i++) {
    noSwap = true;
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }

  console.log(array);
}

bubbleSort(array);
