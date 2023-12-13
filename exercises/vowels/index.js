// ==================VOWELS=================
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//************my solution******************** */
function vowels3(str) {
	let count = 0;
	const newStr = str.replace(/[^\w]/g, '').toLowerCase();

	for (const char of newStr) {
		if (
			char === 'a' ||
			char === 'e' ||
			char === 'i' ||
			char === 'o' ||
			char === 'u'
		) {
			count++;
		}
	}
	return count;
}
vowels('aaiiioooaavvvvvvvvnnnnnn!!!!');

//****************solution 1******************* */
function vowels1(str) {
	let count = 0;
	//const checker = 'aeiou'
	const checker = ['a', 'e', 'i', 'o', 'u'];

	for (const char of str.toLowerCase()) {
		if (checker.includes(char)) {
			count++;
		}
	}
	return count;
}

//****************solution 1******************* */
function vowels(str) {
	// g - global
	// i - case insensitive
	const matches = str.match(/[aeiou]/gi);

	return matches ? matches.length : 0;
}
module.exports = vowels;
