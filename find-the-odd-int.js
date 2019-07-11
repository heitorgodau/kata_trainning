const findOdd = (a) => {
  const obj = {};
  let result = 0;
  a.forEach(el => (!obj[el]) ? obj[el] = 1 : obj[el] += 1);

  for (let key in obj) {
    if (obj[key] % 2 !== 0) {
      result = key;
    }
  }

  return parseInt(result, 10);
};

console.log(findOdd([9, 0, 4, 2, 5, 1, 10]));

const findOdd2 = array => array.reduce((a, b) => a ^ b);

console.log(findOdd2([9, 0, 4, 2, 5, 1, 10]));
