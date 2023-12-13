// =============ANAGRAMS========================
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//*******************my solution************ */
function anagrams3(stringA, stringB) {
	stringA.replace(/[^\w]/g, '').toLowerCase();
	stringB.replace(/[^\w]/g, '').toLowerCase();

	const a = stringA.split('').sort().toString();
	const b = stringB.split('').sort().toString();

	return a === b;
}

//******************solution 1************* */
//!      FREQUENCY COUNTER PATTERN          */
function anagrams1(stringA, stringB) {
	const aCharMap = buildCharMap(stringA);
	const bCharMap = buildCharMap(stringB);

	if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
		return false;
	}

	for (let char in aCharMap) {
		if (aCharMap[char] !== bCharMap[char]) {
			return false;
		}
	}
	return true;
}

function buildCharMap(str) {
	const charMap = {};

	for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
		charMap[char] = charMap[char] + 1 || 1;
	}

	return charMap;
}

//******************solution 2************* */
function anagrams(stringA, stringB) {
	return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
