import { getNodes } from "./todolist-modules.js"
const {addBtn, taskList, taskInput, unFinishedTaskDisplay, deleteBtn} = getNodes();

let taskListData = [];

addBtn.addEventListener("click", function() {addTask(taskListData)});
taskList.addEventListener("click", deleteTask);
deleteBtn.addEventListener("click", deleteAllTasks);

function addTask(taskListData) {
  let taskData = {};
  if (taskInput.value.trim() == "") {
    alert("Please add task");
  } else {
    taskData.taskName = taskInput.value;
    taskData.id = new Date().getTime();
    taskData.isFinished = false;
    taskListData.push(taskData);
  }
  taskInput.value = "";
  updateList();
}

function updateList() {
  let str = "";
  taskListData.forEach((item) => {
    str += `
    <li data-id=${
      item.id
    }><label class="checkbox" for=""><input type="checkbox" ${
      item.isFinished ? "checked" : ""
    }></input><span>${
      item.taskName
    }</span></label><button type=button class="delete">Delete</li>
    `;
  });
  taskList.innerHTML = str;
  let unFinishedTaskCounter = taskListData.filter(
    (item) => item.isFinished == false
  );
  unFinishedTaskDisplay.textContent = `You have ${unFinishedTaskCounter.length} pending tasks`;
}

function deleteTask(e) {
  let id = e.target.closest("li").dataset.id;
  if (e.target.getAttribute("class") === "delete") {
    let index = taskListData.findIndex((item) => item.id == id);
    taskListData.splice(index, 1);
  } else {
    taskListData.forEach((item) => {
      if (item.id == id) {
        if (item.isFinished == false) {
          item.isFinished = true;
        } else {
          item.isFinished = false;
        }
      }
    });
  }
  updateList();
}

function deleteAllTasks() {
  taskListData = [];
  updateList();
}
