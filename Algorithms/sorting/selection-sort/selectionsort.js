let array = [2, 8, 1, 3, 6, 7, 5, 4];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[lowest] > array[j]) lowest = j;
    }
    if (i !== lowest) [array[i], array[lowest]] = [array[lowest], array[i]];
  }
  console.log(array);
}

selectionSort(array);
