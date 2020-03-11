const path = require('path');
const fs = require('fs');

const fileContent = fs.readFileSync(
  path.join(__dirname, 'dataset.json'),
  'utf-8',
);

const { bankBalances } = JSON.parse(fileContent);

function hundredThousandairs() {
  const MINIMUM_AMOUNT = 100000;
  return bankBalances.filter(account => account.amount >= MINIMUM_AMOUNT);
}

function datasetWithRoundedDollar() {
  return bankBalances.map(account => {
    const newAccount = account;
    const roundedAmount = Math.round(newAccount.amount);
    newAccount.rounded = roundedAmount;
    return newAccount;
  });
}

// function sumOfBankBalances() {
//   let totalSum = 0;
//   bankBalances.forEach(account => {
//     const amt = Number(account.amount);
//     totalSum += Math.ceil(amt * 100) / 100;
//   });
//   return totalSum;
// }

// function sumOfInterests() {
//   let totalSum = 0;
//   const TAX = 18.9;
//   bankBalances.forEach(account => {
//     const amt = Math.round(Number(account.amount));
//     const tax = Math.round((amt * TAX) / 100);
//     totalSum += Math.ceil(tax * 100) / 100;
//   });
//   return totalSum;
// }

// function higherStateSums() {
//   let totalSum = 0;
//   const MINIMUM_AMOUNT = 1000000;
//   bankBalances.forEach(account => {
//     const amount = Number(account.amount);
//     console.log(amount);
//     if (amount > MINIMUM_AMOUNT) {
//       totalSum += amount;
//     }
//   });
//   return totalSum;
// }

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  // sumOfBankBalances,
  // sumOfInterests,
  // higherStateSums
};
