function rot13(...args) {
  const input = args[0];
  let output = '';
  const ASCII_VALUE_A = 65;
  const ASCII_VALUE_Z = 90;
  const ROTATION = 13;
  for (const char of input) {
    const asciiChar = char.charCodeAt(0);
    if (asciiChar >= ASCII_VALUE_A && asciiChar <= ASCII_VALUE_Z) {
      const temp = (ASCII_VALUE_A) + ((asciiChar + ROTATION) - ASCII_VALUE_A);
      const AsciiOfcipher = temp % (ASCII_VALUE_Z - ASCII_VALUE_A + 1);
      const cipher = String.fromCharCode(AsciiOfcipher);
      output += cipher;
    } else {
      output += char;
    }
  }
  return output;
}

export {
  rot13,
};
