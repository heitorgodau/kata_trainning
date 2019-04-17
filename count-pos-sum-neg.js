function countPositivesSumNegatives(input) {
  let arr = [];
  if (input === null || input.length === 0) { 
    return arr;
  }
  let count = 0;
  let sum = 0;
  input.forEach(e => {
    return e > 0 ? count += 1 : sum += e
  });
  arr.unshift(count);
  arr.push(sum);
  return arr;
}

const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
console.log(countPositivesSumNegatives(testData));
//  expected = [10, -65]
