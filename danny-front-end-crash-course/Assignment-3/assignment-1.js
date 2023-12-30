// Practice-1 Create a counter with add and sub and show current number
const plus = document.querySelector(".plus");
const counter = document.querySelector(".counter");
const minus = document.querySelector(".minus");
const reset = document.querySelector(".reset-btn");
const taskinput = document.querySelector(".taskinput");
const addbtn = document.querySelector(".addbtn");
const taskslist = document.querySelector(".taskslist");

let num = 0;

function add() {
  num += 1;
  counter.textContent = num;
}

function deduct() {
  num -= 1;
  counter.textContent = num;
}

function resetNum() {
  num = 0;
  counter.textContent = num;
}

plus.addEventListener("click", () => {
  add();
});

minus.addEventListener("click", () => {
  deduct();
});

reset.addEventListener("click", () => {
  resetNum();
});

// Create a todo list
let taskListData = [];

addbtn.addEventListener("click", () => {
  addtask();
});

function addtask() {
  let taskData = {};
  if (taskinput.value.trim() == "") {
    alert("Please add task");
  } else {
    taskData.taskName = taskinput.value;
    taskListData.push(taskData);
  }
  taskinput.value = "";
  renderTaskList();
}

function renderTaskList() {
  let str = "";
  taskListData.forEach((item) => {
    str += `<li>${item.taskName}</li>`;
  });
  taskslist.innerHTML = str;
}
