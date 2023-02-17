function quickSort(array) {
	if (!array.length) return [];
	let left = [], right = [], pivot;
	pivot = array[0];

	for (let i = 1; i < array.length; i++) {
		let val = array[i]
		val < pivot ? left.push(val) : right.push(val);
	}

	return [...quickSort(left), pivot, ...quickSort(right)];

}