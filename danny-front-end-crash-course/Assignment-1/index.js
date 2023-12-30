// Practices 1
// Declare some variable and log the result of variables arithmetic. 7個結果 + - x / %
let a = 5 + 10; // 15
let b = 10 - 5; // 5
let c = 10 * 10; // 100
let d = 10 / 2; // 5
let e = 10 % 2; // 0

// Declare some variable and assign the result of variables arithmetic to another variable and log it.
let num1 = 5 * 10;
let num2 = num1;
console.log(num2); // 50

// Declare some variable and log the result to variables comparison.
let num3 = 10;
console.log(num3 > 5); //true

// Declare some variable and log the result of variables logical convertion.
let num4 = 10;
console.log(num4 > 11 || num4 == 10); // true

// Practices 2 - if...else
// Declare a variable called age and show ‘can vote’ if age >= 18, show ‘can’t vote’ if age < 18
let age = 20;
if (age >= 18) {
  console.log("can vote");
} else if (age < 18) {
  console.log("can't vote");
}
Check if a number is odd or even.
let num5 = 7;
if (num5 % 2 == 0) {
  console.log("num5 is even");
} else {
  console.log("num5 is odd");
}

// Declare two variables and check which one is big or they’re equaled.
let x = 2;
let y = 3;
if (x > y) {
  console.log("x is bigger than y");
} else if (x == y) {
  console.log("x is equal to y");
} else {
  console.log("x is either bigger or equal to y");
}

// Declare three variables and check which one is biggest or they’re equaled.
let number1 = 3;
let number2 = 4;
let number3 = 1;
if (number1 > number2 && number1 > number3) {
  console.log("number1 is the biggest number");
} else if (number2 > number1 && number2 > number3) {
  console.log("number2 is the biggest number");
} else if (number3 > number1 && number3 > number2) {
  console.log("number3 is the biggest number");
} else if (number1 == number2 && number1 == number3) {
  console.log("three variables are equal to each other");
}

// Declare two variables for range (ex. 10, 100), declare another number variable and check a number is present in given range
let range1 = 20;
let range2 = 40;
let targetNum = 60;

if (targetNum >= range1 && targetNum <= range2) {
  console.log("targetNum is in given range");
} else {
  console.log("targetNum isn't in given range");
}

// Declare a variable called year and check the year is leap year or not.
let year = 1900;

if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
  console.log("the year is leap year");
} else {
  console.log("the year is not leap year");
}

// Practices 3 - switch case
// Declare a variable called day type is number and show the  result of day of string (0 → ‘Sunday’, 1 → ‘Monday’, … 6 → ‘Saturday’)
let day = 5;

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
}

// Declare a variable called seaon type is number and show the result of season of string (1 → ‘Spring’, 2 → ‘Summer’, 3 → ‘Fall’, 4 → ‘Winter’)
let season = 1;

switch (season) {
  case 1:
    console.log("Spring");
    break;
  case 2:
    console.log("Summer");
    break;
  case 3:
    console.log("Fall");
    break;
  case 4:
    console.log("Winter");
}

// Practices 4 - loop (for and while) for 和 while 都要各實作一次，每題各兩個答案
// Show 1 to 10000
// for loop
for (let i = 1; i <= 10000; i++) {
    console.log(i);
}
// while loop
let g = 1;

while (g <= 10000) {
    console.log(g);
    g++;
}

// Show 1 to 100 even numbers
// for loop
for (let startNum = 1; startNum <= 100; startNum++) {
    if (startNum % 2 == 0) {
        console.log(startNum)
    }
};

// while loop
let startNum = 1;
while (startNum <= 100) {
    if (startNum % 2 == 0) {
        console.log(startNum)
    }
    startNum++
};

// Show 1 to 100 odd numbers
// for loop
for (let startNum = 1; startNum <= 100; startNum++) {
    if (startNum % 2 !== 0) {
        console.log(startNum);
    }
};

// while loop
let startNum = 1;
while(startNum <= 100) {
    if(startNum % 2 !== 0) {
        console.log(startNum)
    }
    startNum++
};

// ****** Show 1 to 100 prime numbers ******
// for loop
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
// Declare a variable called size and show the height of size triangle

// for loop
let size = "";
for(let i = 1; i <= 5; i++) {
  size += "*";
  console.log(size)
}
// while loop
let size = "";
let i = 1;
while(i <= 5) {
  size += "*";
  console.log(size);
  i++
};

// Show Multiplication Table (from 1*1 to 9*9)
for(let x = 1; x <= 9; x++) {
  for(let y = 1; y<= 9; y++) {
    console.log(`${x} * ${y} = ${x*y}`)
  }
}

// while loop
let x = 1;

while(x <= 9) {
  let y = 1;
  console.log(`${x} * ${y} = ${x*y}`);
  while(y <= 9) {
    y++;
    console.log(`${x} * ${y} = ${x*y}`)
  }
  x++;
}

// Practices 5 - function
// Declare a arrow function called isEven, should pass a number variable and should return the result if is even return true
let isEven = (n) => n % 2 == 0;
console.log(isEven(4)) //true

// Declare a arrow function called isLeapYear, should pass a number variable and should return the result if is leap year return true
let year = 1900;

if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
  console.log("the year is leap year");
} else {
  console.log("the year is not leap year");
}

let isLeapYear = (year) => {
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
    console.log("the year is leap year");
  } else {
    console.log("the year is not leap year");
  }
};
console.log(isLeapYear(1900)) //the year is not leap year

// Declare a arrow function called isPrime, should pass a number variable and should return the result if is prime number return true
let isPrime = (n) => {
  if(n < 2) {
    return false;
  }
  for(let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true
}

// Declare a arrow function called findMax, should pass 3 number variables and should return the max number of them.
let findMax = (number1, number2, number3) => {
  if (number1 > number2 && number1 > number3) {
    console.log("number1 is the biggest number");
  } else if (number2 > number1 && number2 > number3) {
    console.log("number2 is the biggest number");
  } else if (number3 > number1 && number3 > number2) {
    console.log("number3 is the biggest number");
  } else if (number1 == number2 && number1 == number3) {
    console.log("three variables are equal to each other");
  }
};

console.log(findMax(1,2,5)) //number3 is the biggest number
