

function isPowerOfTwo(n) {
  if (n == 1)
    return true
  if (n < 1)
    return false
  return isPowerOfTwo(n / 2)
}


// -----------------------------------------------


function isPowerOfTwo(n) {
  const divide = (number) => number < 10 ? number : divide(number / 2)
  return divide(n) % 2 === 0
}


// -----------------------------------------------


const isPowerOfTwo = (n) => {
  if (n === 0) return false;

  let sqrN = n;
  while (sqrN > 2) {
    sqrN /= 2;
  }

  return sqrN % 2 === 0 || n === 1;
};
