// Practices 1 - Array
// Declare a array called fruits with some fruits in default.
const fruits = ["banana", "guava", "papaya", "orange"];

// Print every element in the fruits array declared above.
console.log(fruits);

// Modify the thirth fruit to Durian and print the fruits array.
fruits.splice(2, 1, "durian");
console.log(fruits);

// Using push method to add two fruits into array.
fruits.push("mango", "pineapple");

// Remove the first fruit from the array.
fruits.shift();

// Using for, while loop to print the element in the fruits array.
for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Declare a array called numbers and set each element to its squared using map.
const numbers = [3, 4, 6, 8, 10];
numbers.map((item) => {
  return Math.sqrt(item);
});

// Declare a array called numbers and filter the prime number using filter.
const numbers = [2, 4, 6, 7, 10, 11];

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
    return true;
  }
}

let result = numbers.filter(item => isPrime(item));
console.log(result)

// Declare a array called numbers and computed the sum of the elements using reduce.
const numbers = [1, 3, 5, 7, 9, 11];
// const result = numbers.reduce((acu, curVal) => acu + curVal, 0);
console.log(result);

// Practice 2 - Object
// Create an object called person with properties for name, age, and gender. Assign values to these properties and then display the name and age of the person.

const person = {
    name: "",
    age: 0,
    gender: ""
}

person.name = "David";
person.age = 28;
person.gender = "male";

console.log(person);

// Add a method to the person object created in the previous assignment called greet. The method should display a greeting message “Hello”. Invoke the greet method to see the greeting message.
person.greet = function() { console.log("Hello") };
console.log(person.greet());

// Add a properties called friends to the person which contains several names and print it.
person.friends = ["Jack", "John", "Toby"];
console.log(person.friends);

// Practice 3 Access Dom Node
// Create a simple html with some tags.

// Using getElementById to get a element and print it.
const main = document.getElementById("main");
console.log(main);

// Using getElementsByClassName to get elements and print all.
const header = document.getElementsByClassName(".header");
console.log(header);

// Using querySelector to get a element by id and print it.
const sec1 = document.querySelector("#sec1");
console.log(sec1);

// Using querySelector to get a element by class and print it.
const sec2 = document.querySelector(".sec2");
console.log(sec2);

// Using querySelectorAll to get elements by class and print all.
const allMainNodes = document.querySelectorAll(".main")
console.log(allMainNodes[0].children)

// Practice 4 Create Dom Node （課程投影片有附圖，需先參考）
// create a simple html like example

// Append a p tag with “My first DOM created.” into container.
const container = document.querySelector(".container");
const myFirstDom = document.createElement("p");
const firstDomText = document.createTextNode("My first DOM created!!");

myFirstDom.appendChild(firstDomText);
container.appendChild(myFirstDom);

// Append a ul tag.
const myFirstUnorderList = document.createElement("ul");
myFirstUnorderList.setAttribute("class", "myFirstUl");

container.appendChild(myFirstUnorderList)

// Append 3 li tags into the ul tag with 3 items: red, blue, yellow using for loop.
const colors = ['red', 'blue', 'yellow'];
const myFirstUl = document.querySelector(".myFirstUl");
// forEach
// colors.forEach(item => {
//     const lists = document.createElement("li");
//     lists.textContent = item;
//     myFirstUl.appendChild(lists);
// })

// for loop
for(i = 0; i < 3; i++) {
    const lists = document.createElement("li");
    lists.textContent = colors[i];
    myFirstUl.appendChild(lists)
}


//Practice 5 Events
// Continuing from the previous practice.
// Create a text input and button called “add color”, when user click the button add the color in the text input into the list.
const textInput = document.createElement("input");
const addColorBtn = document.createElement("button");

// 這邊我原先使用 getElementsByClassName，似乎沒有作用 QQ
function changeColor() {
    document.getElementById("textInput").style.backgroundColor = "blue";
}

textInput.setAttribute("type", "text")
textInput.setAttribute("id", "textInput")
addColorBtn.setAttribute("type", "button")
addColorBtn.setAttribute("onclick", "changeColor()")
addColorBtn.textContent = "add color"


myFirstUl.appendChild(textInput);
myFirstUl.appendChild(addColorBtn);