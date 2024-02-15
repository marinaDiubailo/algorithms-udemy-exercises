// ==============MAX CHAR===================
// Given an array of numbers, return an array of numbers that occur once.
// --- Examples
// unique([1, 1, 2, 2, 3, 4, 4, 5]) === [3, 5]

const arr = [1, 1, 2, 2, 3, 4, 4, 5];

function unique(array) {
  const result = [];

  const obj = {};

  for (let value of array) {
    obj[value] = obj[value] + 1 || 1;
  }

  Object.keys(obj).forEach((key) => {
    if (obj[key] === 1) {
      result.push(Number(key));
    }
  });

  return result;
}

console.log(unique(arr));

module.exports = unique;
