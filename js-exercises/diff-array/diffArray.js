function diffArray(arr1, arr2) {
  const set = new Set(arr2);
  const uniqueElementSet = new Set(arr1);
  for (const element of set) {
    const hasElement = uniqueElementSet.has(element);
    if (hasElement) {
      uniqueElementSet.delete(element);
    } else {
      uniqueElementSet.add(element);
    }
  }
  return Array.from(uniqueElementSet);
}
export {
  diffArray,
};
