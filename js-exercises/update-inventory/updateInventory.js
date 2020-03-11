function updateInventory(...args) {
  const originalArr = args[0].map(element => element);
  const newArr = args[1];
  const result = [];
  const elementIndexMap = new Map();
  originalArr.forEach((element, index) => {
    const itemName = element[1];
    elementIndexMap.set(itemName, index);
  });
  newArr.forEach((element) => {
    const quantity = element[0];
    const itemName = element[1];
    const indexInOriginalArr = elementIndexMap.get(itemName);
    if (indexInOriginalArr !== undefined) {
      const oldElement = originalArr[indexInOriginalArr];
      const oldQuantity = oldElement[0];
      const newQuantity = oldQuantity + quantity;
      oldElement[0] = newQuantity;
      originalArr.splice(indexInOriginalArr, 1, oldElement);
    } else {
      originalArr.push(element);
    }
  });
  return sortInAlphabaticalOrder(originalArr);
}

const sortInAlphabaticalOrder = (arr) => {
  return arr.sort((element1, element2) => {
    const name1 = element1[1];
    const name2 = element2[1];
    if (name1 <= name2) {
      return -1
    }
    return 1;
  })
}
export {
  updateInventory,
};