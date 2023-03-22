/**
 * Clase que simula una cola en JavaScript
 * @class Queue
 */
class Queue {
	constructor() {
		this.collection = {};
		this.start = 0;
		this.end = 0;
	}
	print() {
		console.log(this.collection);
	}
	/**
	 * Agrega un elemento al final de la cola
	 * En realidad es simulado, ya que lo que hace es agregar un elemento al objeto
	 * con un indice que se va incrementando, como si fuera un arreglo pero 
	 * en realidad es un objeto
	 */
	enqueue(val) {
		this.collection[this.end++] = val;
	}
	/**
	 * Para eliminar un elemento de la cola aumentamos el valor de la variable de inicio
	 * ya que en las colas el primer elemento en entrar es el primero en salir
	 * y como consume mucho tiempo eliminar una propiedad de un objeto
	 * lo que hacemos es aumentar el valor de la variable de inicio, que será la que se tomará
	 * como el inicio de la cola
	 */
	dequeue() {
		return this.collection[this.start++];
	}
	front() {
		return this.collection[this.start];
	}
	/**
	 * Se resta el final del inicio para calcular el tamaño de la cola
	 */
	size() {
		return this.end - this.start;
	}
	isEmpty() {
		return this.size() === 0;
	}
}