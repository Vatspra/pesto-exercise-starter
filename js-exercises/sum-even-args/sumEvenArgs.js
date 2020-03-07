const sumEvenArgs = (...args) => {
  const arr = args;
  let total = 0;
  arr.forEach(num => {
    if (num % 2 === 0) {
      total += num;
    }
  });
  return total;
};

export { sumEvenArgs };
