const readline = require("readline");
const { taskList } = require("./tasks");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askUser(questionText) {
  return new Promise((resolve) => {
    rl.question(questionText, (input) => {
      resolve(input);
    });
  });
}

function showPending(taskList) {
  const pendingTasks = taskList.filter((task) => task.status === "pending");
  pendingTasks.length > 0
    ? console.log(pendingTasks)
    : console.log("No pending tasks");
}

function showCompleted(taskList) {
  const completedTasks = taskList.filter((task) => task.status === "completed");
  completedTasks.length > 0
    ? console.log(completedTasks)
    : console.log("No completed tasks");
}

function showPriority(taskList, priorityType) {
  taskList.sort((a, b) => a.priority - b.priority);
  priorityType === "low"
    ? console.log(taskList)
    : console.log(taskList.reverse());
}

module.exports = { askUser, rl, showPending, showCompleted, showPriority };
