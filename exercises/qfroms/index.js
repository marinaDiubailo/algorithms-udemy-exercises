//==================QUEUE FROM STACK=======================
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

//***********************my solusion********************* */
class Queue1 {
	constructor() {
		this.stack1 = new Stack();
		this.stack2 = new Stack();
	}

	add(record) {
		this.stack1.push(record);

		while (this.stack2.peek()) {
			this.stack2.pop();
		}

		for (let i = this.stack1.data.length - 1; i >= 0; i--) {
			this.stack2.push(this.stack1.data[i]);
		}
	}

	remove() {
		return this.stack2.pop();
	}

	peek() {
		return this.stack2.peek();
	}
}

//***********************solusion********************* */
class Queue {
	constructor() {
		this.first = new Stack();
		this.second = new Stack();
	}

	add(record) {
		this.first.push(record);
	}

	remove() {
		while (this.first.peek()) {
			this.second.push(this.first.pop());
		}
		const record = this.second.pop();

		while (this.second.peek()) {
			this.first.push(this.second.pop());
		}

		return record;
	}

	peek() {
		while (this.first.peek()) {
			this.second.push(this.first.pop());
		}

		const record = this.second.peek();

		while (this.second.peek()) {
			this.first.push(this.second.pop());
		}

		return record;
	}
}

const q = new Queue();
q.add(1);
q.add(2);
q.add(3);
console.log(q);

console.log(q.peek());
console.log(q.remove());
console.log(q.remove());
console.log(q.remove());
console.log(q);
module.exports = Queue;
