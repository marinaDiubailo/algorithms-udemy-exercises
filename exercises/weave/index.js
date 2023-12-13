// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
// q.remove(); // 1
// q.remove(); // 'Hi'
// q.remove(); // 2
// q.remove(); // 'There'
const Queue = require('./queue');

const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);
console.log(queueOne);

const queueTwo = new Queue();
queueTwo.add('Hi');
queueTwo.add('There');
queueTwo.add('No');
console.log(queueTwo);

const q = weave(queueOne, queueTwo);

//********************my solution************************* */
function weave1(sourceOne, sourceTwo) {
	let q = new Queue();
	let maxIndex;

	if (sourceOne.data.length >= sourceTwo.data.length) {
		maxIndex = sourceOne.data.length - 1;
	} else {
		maxIndex = sourceTwo.data.length - 1;
	}

	for (let i = maxIndex; i >= 0; i--) {
		let peekedOne = sourceOne.peek();
		let peekedTwo = sourceTwo.peek();

		if (peekedOne && peekedTwo) {
			q.add(peekedOne);
			q.add(peekedTwo);
		} else if (!peekedOne) {
			q.add(peekedTwo);
		} else if (!peekedTwo) {
			q.add(peekedOne);
		}
		sourceOne.remove();
		sourceTwo.remove();
	}

	return q;
}

//********************solution************************** */
function weave(sourceOne, sourceTwo) {
	const q = new Queue();

	while (sourceOne.peek() || sourceTwo.peek()) {
		if (sourceOne.peek()) {
			q.add(sourceOne.remove());
		}

		if (sourceTwo.peek()) {
			q.add(sourceTwo.remove());
		}
	}

	return q;
}

module.exports = weave;
