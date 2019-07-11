




const simpleTransposition = (text) => {
  let row1 = '';
  let row2 = '';
  for (let i = 0; i < text.length; i += 1) {
    i % 2 === 0 ? row2 += text[i] : row1 += text[i];
  }
  return row2 + row1;
};



























const simpleTransposition = (text) => {
  const row1 = [text[0]];
  const row2 = [text[1]];

  for (let i = 2; i < text.length; i += 1) {
    i % 2 === 0 ? row1.push(text[i]) : row2.push(text[i]);
  }
  return (row1.join('')) + (row2.join(''));
};

























const simpleTransposition = text => {
  const textArr = [...text];
  const evenArr = [];
  const oddArr = [];
  
  textArr.forEach((letter, idx) => {
   (idx % 2 === 0) ? evenArr.push(letter) : oddArr.push(letter);
  })
  
  return [...evenArr, ...oddArr].join('');
 ​
 }
