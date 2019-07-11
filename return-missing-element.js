const getMissingElement = (arr) => {
  let result = 45;
  arr.forEach(el => result -= el);
  return result;
};

// const getMissingElement = (arr) => arr.reduce((acc, item) => acc - item, 45);

// const getMissingElement = (arr) => {
//   for (let i = 0; i <= arr.length; i += 1) {
//     if(!arr.includes(i)) {
//       return i
//     }
//   }
// };

// const getMissingElement = (arr) => {
//   let result = 0;
//   arr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] + 1 !== arr[i + 1] && arr[0] === 0) {
//       result = arr[i] + 1;
//       return result;
//     }
//   }
//   return result;
// };

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]), 'returns 8');
console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1]), 'returns 3');

/* Fellow code warrior, we need your help!
We seem to have lost one of our array elements, and we need your help to retrieve it!
Our array, superImportantArray,
was supposed to contain all of the integers from 0 to 9 (in no particular order),
but one of them seems to be missing.

Write a function called getMissingElement that accepts an array of
unique integers between 0 and 9 (inclusive), and returns the missing element. */
