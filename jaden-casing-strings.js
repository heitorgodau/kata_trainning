const toJadenCase = str => str.toLowerCase().split(' ').map(el => el.replace(el[0], el[0].toUpperCase())).join(' ');

String.prototype.toJadenCase = function () {
  return this.toLowerCase().split(' ').map(el => el.replace(el[0], el[0].toUpperCase())).join(' ');
};


//Tests
var str = "How can mirrors be real if our eyes aren't real";
(toJadenCase(str) === "How Can Mirrors Be Real If Our Eyes Aren't Real") ? console.log('Match!') : console.log('Try Again!');
str.toJadenCase();
(str.toJadenCase() === "How Can Mirrors Be Real If Our Eyes Aren't Real") ? console.log('Match!') : console.log('Try Again!');

//Description ------>
/*Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"*/
