// ================FIBONACCI============
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//********************my solution******************** */
// function fib3(n) {
// 	const array = [0, 1];
// 	let fib;

// 	for (let i = 2; i <= n; i++) {
// 		fib = array[i - 1] + array[i - 2];
// 		array.push(fib);
// 	}

// 	return array[n];
// }

// //********************solution 1 O(n)******************** */
// function fib1(n) {
// 	const result = [0, 1];

// 	for (let i = 2; i <= n; i++) {
// 		const a = result[i - 1];
// 		const b = result[i - 2];
// 		result.push(a + b);
// 	}

// 	return result[n];
// }
// //********************solution 2 recursive O(2^n) exponential time******************** */
// function fib2(n) {
// 	if (n < 2) {
// 		return n;
// 	}

// 	return fib(n - 1) + fib(n - 2);
// }

// //******O() memoized solution***** */
// function fibSlow(n) {
// 	if (n < 2) {
// 		return n;
// 	}

// 	return fib(n - 1) + fib(n - 2);
// }

// function memoizer(fn) {
// 	const cache = {};

// 	return function (...args) {
// 		if (cache[args]) {
// 			return cache[args];
// 		}
// 		const result = fn.apply(this, args);
// 		cache[args] = result;

// 		return result;
// 	};
// }

// const fib = memoizer(fibSlow);

const ns = ['translation', 'about', 'main'];
const supportedLngs = ['en', 'ru'];
const resources = ns.reduce((acc, n) => {
    supportedLngs.forEach((lng) => {
        if (!acc[lng]) acc[lng] = {};
        acc[lng] = {
            ...acc[lng],
            [n]: {
                'zr---rrr1': 'dsdfsfsdfsdf',
                'zr---rrr2': 'dsdfsfsdfsdf',
                'zr---rrr3': 'dsdfsfsdfsdf',
            },
        };
    });
    return acc;
}, {});
console.log(resources);

// module.exports = fib;
