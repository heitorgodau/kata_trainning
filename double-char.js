const doubleChar = str => {
  let newStr = str.split('');
  newStr.forEach((e, i) => {
    newStr[i] = e + e;
  });
    return newStr.join('');
}

console.log(doubleChar('Heitor')); // HHeeiittoorr
