function longestWordInString(...args) {
  const inputString = args[0];
  const wordArray = inputString.split(' ');
  const wordLengthArray = wordArray.map(word => word.length);
  return Math.max(...wordLengthArray);
}
export { longestWordInString };
