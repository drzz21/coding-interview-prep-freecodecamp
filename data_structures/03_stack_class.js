function Stack() {
	var collection = [];
	this.print = function () {
		console.log(collection);
	};

	this.push = function (el) {
		collection.push(el);
	}

	this.pop = function () {
		return collection.pop();
	}

	this.isEmpty = function () {
		return collection.length == 0;
	}

	this.clear = function () {
		collection = [];
	}

	this.peek = function () {
		return collection[collection.length - 1];
	}

}

let mystack = new Stack();

mystack.push(1);
mystack.print();
mystack.push(2);
mystack.print();
console.log(mystack.peek());