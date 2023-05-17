class Set {
	constructor() {
		// This will hold the set
		this.dictionary = {};
		this.length = 0;
	}
	// This method will check for the presence of an element and return true or false
	has(element) {
		return this.dictionary[element] !== undefined;
	}
	// This method will return all the values in the set
	values() {
		return Object.values(this.dictionary);
	}
	// This method will add an element to the set
	add(element) {
		if (!this.has(element)) {
			this.dictionary[element] = element;
			this.length++;
			return true;
		}

		return false;
	}
	// This method will remove an element from a set
	remove(element) {
		if (this.has(element)) {
			delete this.dictionary[element];
			this.length--;
			return true;
		}

		return false;
	}
	// This method will return the size of the set
	size() {
		return this.length;
	}
	// Only change code below this line
	union(set) {
		// este metodo debe retornar un nuevo set por lo que 
		// creamos una nueva instancia de un set aquí
		const newSet = new Set();
		// al nuevo set le agregamos los valores del set actual
		for (let val of this.values()) {
			newSet.add(val);
		}
		// y agregamos los valores del set que estamos recibiendo

		for (let val of set.values()) {
			newSet.add(val);
		}
		// por ultimo retornamos el nuevo set creado con estos 2 otros sets
		//esto se puede guardar como una nueva variable, un tercer set

		return newSet;
	}

	// Only change code above this line
}

//example of use
//creamos 2 sets y agregamos valores
let setA = new Set();
setA.add("a");
setA.add("b");
setA.add("c");
let setB = new Set();
setB.add("c");
setB.add("d");

//imprimimos los valores para ver que se hayan agregado correctamente
console.log(setA.values());
console.log(setB.values());
//al set A le unimos los datos del set B
setA.union(setB);
//verificamos que se hayan unido correctamente
console.log(setA.values());