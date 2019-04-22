const solution = (str, end) => {
  let j = str.length - 1;
  for (let i = end.length - 1; i >= 0; i -= 1) {
    if (str[j] !== end[i]) {
      return false;
    }
    j -= 1;
  }
  return true;
};

const solution2 = (str, end) => (str.slice(-end.length) === end);


const solution3 = (str, end) => str.endsWith(end);

console.log(solution('abcde', 'cde'));// true
console.log(solution2('abcde', 'cde'));// true
console.log(solution3('abcde', 'cde'));// true
//  Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string)
