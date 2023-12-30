// ****** Show 1 to 100 prime numbers ******
// for loop
// function checkPrime(n) {
//   if (n == 1 || n == 0) return false;
//   let isPrime = false;
//   // Run a loop from 2 to n-1
//   for (let i = 2; i < n; i++) {
//     //checking for number of divisor
//     if (n % i == 0) {
//       isPrime = false;
//       return isPrime;
//     }
//     isPrime = true;
//     return isPrime;
//   }
//   return isPrime;
// }
// // Driver code
// // Prime Numbers between 1 and 100
// let num = 100;
// // check for every number from 1 to num
// for (let i = 1; i <= num; i++) {
//   // check if current number is prime
//   if (checkPrime(i)) {
//     console.log(i);
//   }
// }

function isPrime(n) {
    if(n < 2) {
      return false;
    }
    for(let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true
  };
  
  let num = 100;
  // check for every number from 1 to num
  for (let i = 1; i <= num; i++) {
    // check if current number is prime
    if (isPrime(i)) {
      console.log(i);
    }
  };
  
  //while loop
  let i = 1;
  let num = 100;
  while(i < num) {
    if (isPrime(i)) {
      console.log(i)
    }
    i++;
  };