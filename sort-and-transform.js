const sortTransform = (a) => {
  const ascToStr = arr => [String.fromCharCode(...arr.slice(0,2)), String.fromCharCode(...arr.slice(arr.length - 2))].join('');

  const ascArr = [...a].sort((elA, elB) => elA - elB);
  const descArr = [...a].sort((elA, elB) => elB - elA);

  const codeA = ascToStr(a);
  const codeB = ascToStr(ascArr);
  const codeC = ascToStr(descArr);

  return `${codeA}-${codeB}-${codeC}-${codeB}`;
};


const sortTransform = (a) => {
  const ascToStr = arr => `${String.fromCharCode(arr[0])}${String.fromCharCode(arr[1])}${String.fromCharCode(arr[arr.length - 2])}${String.fromCharCode(arr[arr.length - 1])}`;

  const ascArr = [...a].sort((elA, elB) => elA - elB);
  const descArr = [...a].sort((elA, elB) => elB - elA);

  const codeA = ascToStr(a);
  const codeB = ascToStr(ascArr);
  const codeC = ascToStr(descArr);

  return `${codeA}-${codeB}-${codeC}-${codeB}`;
};


const sortTransform = (a) => {
  const ascToStr = arr => `${String.fromCharCode(arr[0])}${String.fromCharCode(arr[1])}${String.fromCharCode(arr[arr.length - 2])}${String.fromCharCode(arr[arr.length - 1])}`;

  const ascArr = [...a].sort((elA, elB) => elA - elB);
  const descArr = [...a].sort((elA, elB) => elB - elA);
  const strArr = a.map(el => String.fromCharCode(el)).sort();

  return `${ascToStr(a)}-${ascToStr(ascArr)}-${ascToStr(descArr)}-${strArr[0]}${strArr[1]}${strArr[strArr.length - 2]}${strArr[strArr.length - 1]}`;
};



