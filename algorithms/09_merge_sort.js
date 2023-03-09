function merge(left, right) {
	const arr = [];

	let [leftIndex, rightIndex] = [0, 0];

	while (leftIndex < left.length && rightIndex < right.length) {
		left[leftIndex] < right[rightIndex] ? arr.push(left[leftIndex]) && leftIndex++ : arr.push(right[rightIndex]) && rightIndex++;
	}

	return [...arr, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}


function mergeSort(array) {
	if (array.length <= 1) {
		return array;
	}

	let middle = Math.floor(array.length / 2);
	let left = array.slice(0, middle);
	let right = array.slice(middle);

	return merge(mergeSort(left), mergeSort(right));

}