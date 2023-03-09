function bubbleSort(array) {
	let swapped = array.slice();

	for (let i = swapped.length - 1; i >= 0; i--) {
		for (let j = 0; j < i; j++) {
			if (swapped[j] > swapped[j + 1]) {
				[swapped[j], swapped[j + 1]] = [swapped[j + 1], swapped[j]]
			}
		}
	}

	return swapped;
}
