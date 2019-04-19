const reverseNumber = (n) => {
  const s = n.toString();
  let result = '';
  for (let i = s.length - 1; i >= 0; i -= 1) {
    result += s[i];
  }
  return (n > 0) ? parseInt(result, 10) : -parseInt(result, 10);
};



  console.log(reverseNumber(123)); //  321
  console.log(reverseNumber(-123)); // -321 'Negative Numbers should be preserved'
  console.log(reverseNumber(1000)); // 1 'Should handle numbers ending with "0"'

/*Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

Examples
 123 ->  321
-456 -> -654
1000 ->    1*/