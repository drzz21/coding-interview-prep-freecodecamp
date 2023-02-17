function selectionSort(array) {
	let arrCopy = array.slice();
	for (let i = 0; i < arrCopy.length; i++) {
		let indexMin = i;
		for (let j = indexMin + 1; j < arrCopy.length; j++) {
			if (arrCopy[j] < arrCopy[indexMin]) indexMin = j;
		}
		[arrCopy[i], arrCopy[indexMin]] = [arrCopy[indexMin], arrCopy[i]];

	}
	return arrCopy;
}
