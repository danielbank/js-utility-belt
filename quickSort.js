const quickSort = (list, ogLo, ogHi) => {
  const lo = ogLo !== undefined ? ogLo : 0;
  const hi = ogHi !== undefined ? ogHi : list.length - 1;

  if (lo < hi) {
    const p = partition(list, lo, hi);
    quickSort(list, lo, (p - 1));
    quickSort(list, (p + 1), hi);
  }
};

const partition = (list, lo, hi) => {
  const pivot = list[hi];
  let i = lo - 1;

  for (let j = lo; j < hi; j++) {
    if (list[j] < pivot) {
      i = i + 1;
      swap(list, i, j);
    }
  }
  swap(list, i + 1, hi);
  return i + 1;
}

const swap = (list, i, j) => {
  const temp = list[i];
  list[i] = list[j];
  list[j] = temp;
}

// TESTS

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
quickSort(list);
console.log(list); // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
