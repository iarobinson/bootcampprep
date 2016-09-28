// Write a function which returns a string in reverse.

function reverseString(string) {
  var newString = "";
  var index = string.length - 1;

  while (index >= 0) {
    newString = newString + string[index];
    index = index - 1;
  }

  return newString;
}


// Solutions - Do not edit below this line
console.log(); // for spacing

console.log(reverseString("abc"), " <= cba =>", reverseString("abc") === "cba");

console.log(reverseString("Nelson Mandela"), " <= alednaM nosleN =>", reverseString("Nelson Mandela") === "alednaM nosleN");

console.log(reverseString("life is like a box of chocolates"), " <= setalocohc fo xob a ekil si efil =>", reverseString("life is like a box of chocolates") === "setalocohc fo xob a ekil si efil");

console.log(reverseString("huzzah"), " <= hazzuh =>", reverseString("huzzah") === "hazzuh");

console.log(); // for spacing
