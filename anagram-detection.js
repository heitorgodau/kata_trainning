
const sortStr = str => [...str.toLowerCase()].sort().join('');
const isAnagram = (test, original) => (sortStr(test) === sortStr(original)) ? `${true}, The word ${test} is an anagram of ${original}` : `${false}, Characters do not match for test case ${test}, ${original}`;


console.log(isAnagram('foefet', 'toffee'))//, true, 'The word foefet is an anagram of toffee')
console.log(isAnagram("Buckethead", "DeathCubeK"))//, true, 'The word Buckethead is an anagram of DeathCubeK')
console.log(isAnagram("dumble", "bumble"))//, false, 'Characters do not match for test case dumble, bumble')

/*An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of theeach other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"*/