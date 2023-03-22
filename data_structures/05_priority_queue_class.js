class PriorityQueue {
	constructor() {
		this.collection = [];
	}

	enqueue(item) {
		let index = this.collection.findIndex(el => el[1] > item[1]);
		index === -1 ? this.collection.push(item) : this.collection.splice(index, 0, item);
		// this.collection.push(item);
	}

	dequeue() {
		return this.collection.shift()[0];
	}

	size() {
		return this.collection.length;
	}

	front() {
		return this.collection[0][0];
	}

	isEmpty() {
		return this.collection.length === 0;
	}

	print() {
		console.log(this.collection);
	}

}

const cola = new PriorityQueue();
cola.enqueue(["hola", 2]);
cola.print();
cola.enqueue(["hola", 2]);
cola.enqueue(["hola", 1]);
cola.print();
console.log(cola.front())