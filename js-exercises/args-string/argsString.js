const argsString = (message, args) => {
  let resultStr = '';
  let index = 0;
  for (let i = 0; i < message.length; i += 1) {
    if (message[i] === '{' && message[i + 1] === '}') {
      resultStr += args[index];
      index += 1;
      i += 1;
    } else {
      resultStr += message[i];
    }
  }
  return resultStr;
};

export { argsString };
