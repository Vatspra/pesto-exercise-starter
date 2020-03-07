const rotatedString = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  if (str1 === str2) {
    return false;
  }
  const allPossibleRotationString = str1 + str2;
  return allPossibleRotationString.indexOf(str2) !== -1;
};

export { rotatedString };
