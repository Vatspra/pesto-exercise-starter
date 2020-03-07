
function removeFalsyValues(array) {
  const isArray = Array.isArray(array);
  if (!isArray) throw new TypeError(`expected array got ${typeof array}`);
  const arrayOfTrueValuedElement = array.filter(element => {
    const isTrueValue = Boolean(element);
    if (isTrueValue) {
      return element;
    }
    return false;
  });
  return arrayOfTrueValuedElement;
}
export {
  removeFalsyValues,
};
