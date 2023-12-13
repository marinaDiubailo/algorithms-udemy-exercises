// ======================PYRAMID===============
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//****************my solution O(n^2)**************** */
function pyramid3(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';

        for (let column = 0; column < n + n - 1; column++) {
            if (column >= n - 1 - row && column <= n - 1 + row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        console.log(stair);
    }
}
// pyramid(5);

//****************************Solution 1******************** */
function pyramid1(n) {
    const midpoint = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++) {
        let level = '';

        for (let column = 0; column < 2 * n - 1; column++) {
            if (midpoint - row <= column && midpoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
}

//****************************Solution 2******************** */
function pyramid(n, row = 0, level = '') {
    if (n === row) {
        return;
    }

    if (n + n - 1 === level.length) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    let add;
    if (level.length >= n - 1 - row && level.length <= n - 1 + row) {
        add = '#';
    } else {
        add = ' ';
    }
    pyramid(n, row, level + add);
}
//************************************************ */
/**
 * Given the triangle of consecutive odd numbers:
 *           1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
 */

function rowSumOddNumbers(n) {
    let pyramid = [];
    let num = 1;
    let columnCount = 1;

    for (let row = 0; row < n; row++) {
        let stair = [];

        for (let column = 0; column < columnCount; column++) {
            stair.push(num);
            num += 2;
        }
        columnCount += 1;
        pyramid.push(stair);
    }
    console.log(pyramid[n - 1].reduce((acc, num) => acc + num, 0));
    // return pyramid[n - 1].reduce((acc, num) => acc + num, 0);
}
// rowSumOddNumbers(3); // 27

//********************************************************* */
/**
 * 
 * ROT13 is a simple letter substitution cipher
 *  that replaces a letter with the letter 13 letters
 *  after it in the alphabet.
 *  ROT13 is an example of the Caesar cipher.

    Create a function that takes a string
    and returns the string ciphered with Rot13.
    If there are numbers or special characters
    included in the string,
    they should be returned as they are.
    Only letters from the latin/english alphabet
    should be shifted,
    like in the original Rot13 "implementation".
 */
function rot13(message) {
    let arr = [];

    for (let char of message) {
        let code = char.charCodeAt(0);

        if (!(code > 64 && code < 91) && !(code > 96 && code < 123)) {
            arr.push(char);
        } else if (code > 64 && code < 78) {
            arr.push(String.fromCharCode(code + 13));
        } else if (code > 77 && code < 91) {
            arr.push(String.fromCharCode(code - 13));
        } else if (code > 96 && code < 110) {
            arr.push(String.fromCharCode(code + 13));
        } else if (code > 109 && code < 123) {
            arr.push(String.fromCharCode(code - 13));
        }
    }
    return arr.join('');
}

// console.log(rot13('abcdefghijklmnopqrstuvwxyz'));

//************************************************************* */
/**
 *
 * Implement the function unique_in_order
 *  which takes as argument a sequence
 * and returns a list of items
 * without any elements with the same value next to each other
 * and preserving the original order of elements.
 */

var uniqueInOrder = function (iterable) {
    let arr = [];

    for (let i = 0; i < iterable.length; i++) {
        let current = iterable[i];
        let prev = iterable[i - 1];
        if (current !== prev) {
            arr.push(current);
        }
    }

    return arr;
};

uniqueInOrder('AAAABBBCccDAABBB');
uniqueInOrder([1, 2, 2, 2, 3, 3]);

module.exports = pyramid;
