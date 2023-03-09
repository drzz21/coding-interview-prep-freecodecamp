function pairwise(arr, arg) {
	let newArr = arr.slice();
	if (!arr.length) return 0;
	let res = 0;
	let obj = {};
  
	for (let i = 0; i < newArr.length; i++) {
	  let remaining = arg - newArr[i]
  
	  if (obj.hasOwnProperty(newArr[i]) && obj[newArr[i]].at(0) !== i) {
  
		res += +obj[newArr[i]].shift();
		res += +i;
  
		if (!obj[newArr[i]].length) delete obj[newArr[i]]
		continue;
  
	  }
  
	  if (!obj.hasOwnProperty(remaining)) {
		obj[remaining] = [i]
	  }
	  else {
		obj[remaining].push(i)
	  }
  
	}
  
	return res;
  
  }