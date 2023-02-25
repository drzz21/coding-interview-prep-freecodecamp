function binarySearch(searchList, value) {
	let indexFound, l = 0, r = searchList.length - 1, pivot = Math.floor((r + l) / 2);
	let pivotTrack = [];

	while (indexFound === undefined) {
		pivotTrack.push(searchList[pivot]);
		let pivotVal = searchList[pivot];

		if (pivotVal === value) {
			indexFound = pivot;
		}
		else if (l >= r) {
			indexFound = false;
		}
		else if (value <= pivotVal) {
			r = pivot - 1;
		} else if (value > pivotVal) {
			l = pivot + 1;
		}
		pivot = Math.floor((r + l) / 2);
	}

	return indexFound === false ? "Value Not Found" : pivotTrack;

}