
// Write a function that returns either
//  true or false depending on if the
//  number passed in is prime.
//
// If you're unsure of what a prime is, type 'prime number wiki' in google


function isPrime(num) {
  if (num <= 1) {
    return null;
  }

  var index = 2;

  while (index < num) {
    if (num % index === 0) {
      return false;
    }
    index += 1;
  }

  return true;
}

// Solutions - Do not edit below this line
console.log(); // for spacing

console.log(isPrime(10), " <= false =>", isPrime(10) === false);

console.log(isPrime(13), " <= true =>", isPrime(13) === true);

console.log(isPrime(15), " <= false =>", isPrime(15) === false);

console.log(isPrime(17), " <= true =>", isPrime(17) === true);

console.log(); // for spacing
