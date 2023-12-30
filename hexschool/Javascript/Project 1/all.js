
// about querySelector
// 較短的寫法（傳給變數），以後只需使用這個變數就不用每次都宣告 document.querySelector...
const el = document.querySelector('h1');
el.textContent = "Hello World!";
// 較長的寫法，直接用選擇器指定 h1，但每次使用都需要加上 document.querySelector...（真的好長
document.querySelector('h1').textContent = "Hola Amigos!";

// about innerHTML 新增 HTML 元素 -> 在 main 的 div 中新增 h1 元素
// 需留意 innerHTML 會先刪除原本元素的內容後新增內容
const main = document.querySelector(".main");
main.innerHTML = `<h1 class = "header">標題標題</h1>`

// // 使用 innerHTML 插入變數，在第18行以 template literal 插入變數
const myLink = "https://www.google.com.tw"
const list = document.querySelector(".test");
list.innerHTML = `<ul><li><a href= "${myLink}"><h1>大衛的連結</h1></a></li><ul>`;

//使用 setAttribute 增加 HTML 標籤屬性
const myLink2 = document.querySelector(".akai")
console.log(myLink2);
myLink2.setAttribute("href", "https://www.yahoo.com.tw")
myLink2.setAttribute("class", "red")



// 練習
// const upgradeLink2 = document.querySelector(".list2") 

// let myName = "David";
// let ourCat = "Crema";


// let content = `<ul>
// <li><a href= "${myLink}">My Page</a></li>
// <li><a href= "${myLink}">Name: ${myName}</a></li>
// <li><a href = "${myLink}">Cat Name: ${ourCat}</a></li>
// </ul>`;



// upgradeLink2.innerHTML = content + content;