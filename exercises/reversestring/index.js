// ================REVERSED STRING=================
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//*************Solution my******************** */
function reverseMY(str) {
	const array = [];
	for (const letter of str) {
		array.push(letter);
	}
	const reversedString = array.reverse().join('');
	return reversedString;
}

//*************Solution 1******************** */
function reverse1(str) {
	return str.split('').reverse().join('');
}

//*************Solution 2******************** */
function reverse(str) {
	let reversed = '';
	for (let char of str) {
		reversed = char + reversed;
		debugger;
	}
	return reversed;
}
//*************Solution 3******************** */
// function reverse(str) {
// 	debugger;
// 	// c - press for continue and to exit repl mode
// 	// repl - press for repl mode;
// 	// exit - press to exic debugger;
// 	return str.split('').reduce((reversed, char) => char + reversed, '');
// }
reverse('asdf');

module.exports = reverse;
