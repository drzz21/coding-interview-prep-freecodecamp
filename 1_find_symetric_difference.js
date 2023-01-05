function sym(...arrVal) {
  let diff = [],res;

  const checkSimDiff = (a, b) => {
    diff = []
    for (let i = 0; i < 2; i++) {
      for (let ele of a) {
        if (!b.includes(ele)) diff.push(ele)
      }
      // a.forEach(ele => {
      //   if (!b.includes(ele)) diff.push(ele)
      // });
      [a, b] = [b, a];
    }
    res = new Set(diff)
  }

  checkSimDiff(arrVal[0], arrVal[1])
  
  if (arrVal.length > 2) {
    for (let i = 2; i < arrVal.length; i++) {
      checkSimDiff([...res], arrVal[i])
    }
  }

  return [...res]

}