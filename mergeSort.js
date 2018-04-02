const mergeSort = (list) => {
  if (list.length === 1) return list;
  const middle = Math.floor(list.length / 2);
  const left = list.slice(0, middle);
  const right = list.slice(middle);
  return merge(
    mergeSort(left),
    mergeSort(right)
  );
};

const merge = (left, right) => {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      results.push(left[i]);
      i++;
    } else {
      results.push(right[j]);
      j++;
    }
  }
  return results.concat(left.slice(i)).concat(right.slice(j));
};

// TESTS

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log(mergeSort(list)); // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
