const encryptThis = (txt) => {
  const encrypted = txt.split(' ').map((el) => {
    const arr = el.split('');
    arr[0] = el.charCodeAt(0);
    if (el.length > 2) {
      const sndChar = arr[1];
      const lstCahr = arr[el.length - 1];
      arr[1] = lstCahr;
      arr[el.length - 1] = sndChar;
    }
    return arr.join('');
  });
  return encrypted.join(' ');
};

console.log(encryptThis('A'), '-----> 65');
console.log(encryptThis('A wise old owl lived in an oak'), '-----> 65 119esi 111dl 111lw 108dvei 105n 97n 111ka');
console.log(encryptThis('The more he saw the less he spoke'), '----> 84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp');

/*Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"*/