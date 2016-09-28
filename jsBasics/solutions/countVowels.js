// Write a function that counts the number
//  of vowels in a string


function countVowels(str) {
  var vowelCount = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < str.length; i += 1) {
    if (vowels.indexOf(str[i]) !== -1) {
      vowelCount += 1;
    }
  }

  return vowelCount;
}


// Solutions - Do not edit below this line
console.log(); // for spacing

var string1 = "abcxyz";
console.log(countVowels(string1), " <= 1 =>", countVowels(string1) === 1);

var string2 = "ada Lovelace";
console.log(countVowels(string2), " <= 6 =>", countVowels(string2) === 6);

var string3 = "grace brewster murray hopper";
console.log(countVowels(string3), " <= 8 =>", countVowels(string3) === 8);
console.log(); // for spacing
