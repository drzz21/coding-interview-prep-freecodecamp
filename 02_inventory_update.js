function updateInventory(arr1, arr2) {
  let res = [...arr1];
  const arrCheck = (prodName) => res.findIndex(x => x[1] === prodName);

  for (let [i, prodName] of arr2) {
    let indexFound = arrCheck(prodName);
    if (indexFound !== -1) {
      res[indexFound][0] += +i;
    } else {
      res.push([i, prodName])
    }
  }

  return res.sort((a, b) => a[1].localeCompare(b[1]));
}
