// Write a function that returns a string in reverse.
//
// Do not use a built in function like .reverse() .join() or .split()
//

function reverse(string) {
  var resultString = "";

  var index = string.length - 1;
  while (index >= 0) {

    resultString += string[index];

    index -= 1;
  }

  return resultString;
}

// Solutions - Do not edit below this line
console.log(); // for spacing

var string1 = "abcxyz";
console.log(reverse(string1), " <= zyxcba =>", reverse(string1) === "zyxcba");

var string2 = "Ada Lovelace";
console.log(reverse(string2), " <= ecalevoL adA =>", reverse(string2) === "ecalevoL adA");

var string3 = "Grace Brewster Murray Hopper";
console.log(reverse(string3), " <= reppoH yarruM retswerB ecarG =>", reverse(string3) === "reppoH yarruM retswerB ecarG");
console.log(); // for spacing
