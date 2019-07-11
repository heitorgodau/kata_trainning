const sortArray = (array) => {
  if (array.length === 0) return array;

  const result = array.filter(el => el % 2 !== 0).sort((a, b) => a - b);
  array.forEach((el, idx) => (el % 2 === 0) ? result.splice(idx, 0, el) : null);

  return result;
};

console.log(sortArray([9, 0, 4, 2, 5, 1, 10]));
