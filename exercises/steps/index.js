// ==============STEPS QUESTION=================
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//**************my solution*************************** */
function steps3(n) {
	for (let i = 1; i <= n; i++) {
		console.log('#'.repeat(n - (n - i)) + ' '.repeat(n - i));
	}
}

//**************solution 1 O(n^2) *************************** */
function steps1(n) {
	for (let row = 0; row < n; row++) {
		let stair = '';

		for (column = 0; column < n; column++) {
			if (column <= row) {
				stair += '#';
			} else {
				stair += ' ';
			}
		}
		console.log(stair);
	}
}

//**************solution 2 *************************** */
function steps(n, row = 0, stair = '') {
	if (n === row) {
		return;
	}

	if (n === stair.length) {
		console.log(stair);
		return steps(n, row + 1);
	}

	if (stair.length <= row) {
		stair += '#';
	} else {
		stair += ' ';
	}
	steps(n, row, stair);
}

module.exports = steps;
