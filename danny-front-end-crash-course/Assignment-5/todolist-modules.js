export const getNodes = () => {
  const addBtn = document.querySelector(".addBtn");
  const taskList = document.querySelector(".taskList");
  const taskInput = document.querySelector(".taskInput");
  const unFinishedTaskDisplay = document.querySelector(".todolist-footer p");
  const deleteBtn = document.querySelector(".todolist-footer button");

  return {
    addBtn,
    taskList,
    taskInput,
    unFinishedTaskDisplay,
    deleteBtn
  };
};