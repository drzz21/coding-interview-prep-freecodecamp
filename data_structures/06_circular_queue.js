class CircularQueue {
	constructor(size) {

		this.queue = [];
		this.read = 0;
		this.write = 0;
		this.max = size - 1;

		while (size > 0) {
			this.queue.push(null);
			size--;
		}
	}

	print() {
		return this.queue;
	}

	enqueue(item) {
		// Only change code below this line
		if (this.write > this.max) this.write = 0;
		if (this.queue[this.write] != null) return null;
		this.queue[this.write++] = item;
		return item;

		// Only change code above this line
	}

	dequeue() {
		// Only change code below this line
		if (this.read > this.max) this.read = 0;
		if (this.queue[this.read] == null) return null;
		let val = this.queue[this.read];
		this.queue[this.read++] = null;
		return val;

		// Only change code above this line
	}
}