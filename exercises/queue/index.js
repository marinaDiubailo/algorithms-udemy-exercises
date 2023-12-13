//=====================QUEUE========================
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

//****************my solution**************** */
class Queue {
	constructor() {
		this.array = [];
	}
	add(el) {
		return this.array.unshift(el);
	}

	remove() {
		return this.array.pop();
	}
}

//*************solution*********************** */
class Queue {
	constructor() {
		this.data = [];
	}

	add(record) {
		this.data.unshift(record);
	}

	remove() {
		return this.data.pop();
	}
}

const q = new Queue();

q.add(2);
console.log(q);
//q.remove();
console.log(q.remove());

module.exports = Queue;
