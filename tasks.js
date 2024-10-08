let taskList = [
  {
    id: 1,
    description: "First task",
    status: "pending",
    priority: 1,
    dueDate: null,
  },
  {
    id: 2,
    description: "Second task",
    status: "pending",
    priority: 2,
    dueDate: new Date("2024-10-15"),
  },
];

let taskIdCounter = taskList.length + 1;

function createNewTask(description, priority, dueDate) {
    priority = Number(priority)
  let task = {
    id: taskIdCounter++,
    description: description,
    status: "pending",
    priority: priority || 3,
    dueDate: dueDate || null,
  };
  taskList.push(task);
}

function removeTask(id) {
  id = Number(id);
  const taskIndex = taskList.findIndex((task) => task.id === id);
  if (taskIndex !== -1) {
    taskList.splice(taskIndex, 1);
    console.log(`Task with ID ${id} removed successfully.`);
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
}

function toggleStatus(id) {
  id = Number(id);
  const task = taskList.find((task) => task.id === id);
  if (task) {
    task.status = task.status === "pending" ? "completed" : "pending";
    console.log(`Task with ID ${id} status updated to: ${task.status}`);
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
}

module.exports = { taskList, createNewTask, removeTask, toggleStatus };
