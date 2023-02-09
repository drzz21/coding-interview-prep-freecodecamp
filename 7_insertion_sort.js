function insertionSort(array) {
	let arr2 = array.slice();
	for (let i = 1; i < arr2.length; i++) {
		let curr = arr2[i];
		for (let j = i - 1; j >= 0 && arr2[j] >= curr; j--) {
			[arr2[j + 1], arr2[j]] = [arr2[j], arr2[j + 1]];
		}
	}
	return arr2;
}