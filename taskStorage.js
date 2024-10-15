const fs = require("fs");
const fileName = "tasks.json";

function initializeTaskFile() {
  if (!fs.existsSync(fileName)) {
    const emptyTaskList = [];
    fs.writeFileSync(fileName, JSON.stringify(emptyTaskList, null, 2));
    console.log("Created a new task.json file");
  } else {
    console.log("File already exists");
  }
}

function loadTaskList() {
  const data = fs.readFileSync(fileName);
  const taskList = JSON.parse(data);
  console.log("Loaded the task list successeful");
  return taskList;
}

function saveTaskList(taskList) {
  fs.writeFileSync(fileName, JSON.stringify(taskList, null, 2));
}

module.exports = { initializeTaskFile, loadTaskList, saveTaskList };
