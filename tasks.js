let taskIdCounter = 0;

function createNewTask(taskList, description, priority, dueDate) {
  taskIdCounter = taskList.length + 1;

  let task = {
    id: taskIdCounter++,
    description: description,
    status: "pending",
    priority: Number(priority) || 3,
    dueDate: dueDate || Date(),
  };
  taskList.push(task);
}

function removeTask(taskList, id) {
  id = Number(id);
  const taskIndex = taskList.findIndex((task) => task.id === id);
  if (taskIndex !== -1) {
    taskList.splice(taskIndex, 1);
    console.log(`Task with ID ${id} removed successfully.`);
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
}

function toggleStatus(taskList, id) {
  id = Number(id);
  const task = taskList.find((task) => task.id === id);
  if (task) {
    task.status = task.status === "pending" ? "completed" : "pending";
    console.log(`Task with ID ${id} status updated to: ${task.status}`);
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
}

function editTask(taskList, id, newDescription, newPriority, newDueDate) {
  id = Number(id);
  newPriority = Number(newPriority);
  const task = taskList.find((task) => task.id === id);
  if (task) {
    if (newDescription) task.description = newDescription;
    if (newPriority) task.priority = newPriority;
    if (newDueDate) task.dueDate = newDueDate;
    console.log("Task updated successfully: ");
    console.log(task);
  } else {
    console.log("Task not found");
  }
}

module.exports = { createNewTask, removeTask, toggleStatus, editTask };
