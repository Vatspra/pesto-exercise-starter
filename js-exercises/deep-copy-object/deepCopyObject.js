const deepCopyObject = objToCopy => {
  if (typeof objToCopy !== 'object' || !objToCopy) {
    return objToCopy;
  }
  const newObj = { ...objToCopy };
  for (const key of Object.keys(objToCopy)) {
    if (typeof objToCopy[key] === 'object') {
      const obj = { ...objToCopy[key] };
      newObj[key] = obj;
    }
  }
  return newObj;
};
export { deepCopyObject };
