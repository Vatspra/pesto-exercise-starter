function chunkArrayInGroups(array, chunkSize) {
  const chunkArray = [];
  let index = 0;
  while (index < array.length) {
    const tempArr = [];
    let i = index;
    for (i; i < chunkSize + index; i += 1) {
      const element = array[i];
      if (element !== undefined) {
        tempArr.push(element);
      }
    }
    chunkArray.push(tempArr);
    index = i;
  }
  return chunkArray;
}

export {
  chunkArrayInGroups,
};
