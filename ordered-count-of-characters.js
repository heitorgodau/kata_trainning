const orderedCount = (text) => {
  const obj = {};
  const arr = [];
  for (let i = 0; i < text.length; i += 1) {
    obj[text[i]] = obj[text[i]] + 1 || 1;
    if (!arr.includes(text[i])) {
      arr.push(text[i]);
    }
  }
  return arr.map(el => [el, obj[el]]);
};

console.log(orderedCount('abracadabra'));

/* Count the number of occurrences of each character and return
it as a list of tuples in order of appearance.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1 */