function lastIndexOf(...args) {
  let lastIndex = -1;
  const elementToSearch = args[0];
  const arr = args[1];
  const isArray = Array.isArray(arr);
  if (!isArray) {
    throw new TypeError(`expected array got ${typeof arr}`);
  }
  arr.forEach((element, index) => {
    if (element === elementToSearch) {
      lastIndex = index;
    }
  });
  return lastIndex;
}

export {
  lastIndexOf,
};