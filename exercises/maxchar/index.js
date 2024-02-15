// ==============MAX CHAR===================
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//************My solution************** */
function maxChar1(str) {
  let obj = {};
  for (const char of str) {
    obj[char] = obj[char] + 1 || 1;
  }

  let maxChar = '';
  let maxValue = 0;

  Object.keys(obj).forEach((key) => {
    if (obj[key] > maxValue) {
      maxValue = obj[key];
      maxChar = key;
    }
  });

  return maxChar;
}

//*********************solution************ */

function maxChar(str) {
  let obj = {};

  for (const char of str) {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char] += 1;
    }
  }

  let maxChar = '';
  let maxValue = 0;

  for (let char in obj) {
    if (obj[char] > maxValue) {
      maxValue = obj[char];
      maxChar = char;
    }
  }
  console.log(maxChar);
  return maxChar;
}

module.exports = maxChar;

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
