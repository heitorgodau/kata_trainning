const findShort = s => {
  const arr = s.split(' ');
  let shorter = arr[0].length;
  arr.forEach(e => {
    if (shorter > e.length) {
      shorter = e.length;
    }
  });
  return shorter;
}

console.log(findShort('Comi ontem muita comida')); // 4
