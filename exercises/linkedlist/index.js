// ==================LINKED LIST========================
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		//this.head = new Node(data, this.head);
		//?--------alternative----------------
		this.insertAt(data, 0);
	}

	size() {
		let counter = 0;
		let node = this.head;

		while (node) {
			counter++;
			node = node.next;
		}

		return counter;
	}

	getFirst() {
		//return this.head;
		//?--------alternative----------------
		return this.getAt(0);
	}

	getLast() {
		// if (!this.head) {
		// 	return null;
		// }

		// let node = this.head;

		// while (node) {
		// 	if (!node.next) {
		// 		return node;
		// 	}
		// 	node = node.next;
		// }
		//?--------alternative----------------
		return this.getAt(this.size() - 1);
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if (!this.head) {
			return;
		}
		this.head = this.head.next;
	}

	removeLast() {
		if (!this.head) {
			return;
		}

		if (!this.head.next) {
			this.head = null;
			return;
		}

		let previous = this.head;
		let node = this.head.next;

		while (node.next) {
			previous = node;
			node = node.next;
		}

		previous.next = null;
	}

	insertLast(data) {
		const last = this.getLast();

		if (last) {
			last.next = new Node(data);
		} else {
			this.head = new Node(data);
		}
	}

	getAt(index) {
		let counter = 0;
		let node = this.head;

		while (node) {
			if (counter === index) {
				return node;
			}
			counter++;
			node = node.next;
		}

		return null;
	}

	removeAt(index) {
		if (!this.head) {
			return;
		}

		if (index === 0) {
			this.head = this.head.next;
			return;
		}

		const previous = this.getAt(index - 1);
		if (!previous) {
			return;
		}
		previous.next = previous.next?.next;
	}

	insertAt(data, index) {
		if (!this.head || index === 0) {
			this.head = new Node(data, this.head);
			return;
		}

		const previous = this.getAt(index - 1) || this.getLast();
		const node = new Node(data, previous.next);
		previous.next = node;
	}

	forEach(cb) {
		if (!this.head) {
			return null;
		}
		let node = this.head;
		while (node) {
			cb(node);
			node = node.next;
		}
	}

	*[Symbol.iterator]() {
		let node = this.head;
		while (node) {
			yield node;
			node = node.next;
		}
	}
}
const list = new LinkedList();

list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('c');
//console.log(list.size());
// list.clear();
// console.log(list.size());
console.log(list);
list.removeLast();
console.log(list);
//console.log(list.getFirst());
//list.removeFirst();
//console.log(list.getFirst());
module.exports = { Node, LinkedList };
