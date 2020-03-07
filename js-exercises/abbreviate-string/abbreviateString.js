import { isString } from 'util';

function abbreviateString(str) {
  const isValidString = isString(str);
  if (!isValidString) {
    throw new Error();
  } else {
    const wordArr = str.split(' ');
    if (wordArr.length > 1) {
      const firstWordOfStr = wordArr[0];
      const lastWordOfStr = wordArr[wordArr.length - 1];
      return `${firstWordOfStr} ${lastWordOfStr[0].toUpperCase()}.`;
    }
    return wordArr[0];
  }
}

export { abbreviateString };
