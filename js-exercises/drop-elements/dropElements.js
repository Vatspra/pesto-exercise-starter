function dropElements(elements, predicate) {
  const arr = elements.map(element => element);
  const newArr = arr.filter((element) => {
    const shouldNotDropElement = predicate(element);
    if (shouldNotDropElement) {
      return true;
    }
    return false;
  });
  console.log(newArr);
  return newArr;
}

export { dropElements };