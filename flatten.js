const flatten = (items) => {
  const flat = [];

  items.forEach(item => {
    if (Array.isArray(item)) {
      flat.push(...flatten(item));
    } else {
      flat.push(item);
    }
  });

  return flat;
}

const almostFlatten = (items) => {
  const flat = [];

  items.forEach(item => {
    if (Array.isArray(item) && !Array.isArray(item[0])) {
      flat.push(item);
    } else if (Array.isArray(item)) {
      flat.push(...almostFlatten(item));
    } else {
      flat.push(item);
    }
  });

  return flat;
}
