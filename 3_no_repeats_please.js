let perms = (str) => {
	let arrPerms = [];
	if (str.length === 1) arrPerms.push(str);
	for (let num in str) {
		let char = str[num];
		let remainingChars = str.slice(0, num) + str.slice(+num + 1, str.length)
		for (let permutation of perms(remainingChars)) {
			arrPerms.push(char + permutation);
		}
	}
	return arrPerms;

}

function permAlone(str) {
	let regex = /([a-z])\1/g
	return perms(str).filter(el => el.match(regex) == null).length;
}
