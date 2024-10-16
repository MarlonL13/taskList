const {
  askUser,
  rl,
  showPending,
  showCompleted,
  showPriority,
} = require("./userInterface");

const {
  createNewTask,
  removeTask,
  toggleStatus,
  editTask,
} = require("./tasks");

const {
  initializeTaskFile,
  loadTaskList,
  saveTaskList,
} = require("./taskStorage");

let exit = false;
initializeTaskFile();
let taskList = loadTaskList();

async function main() {
  try {
    while (!exit) {
      const aswer = await askUser(
        "What do you want to do? (add/remove/toggle/view/exit/pending/completed/sort/edit) "
      ); // Wait for the user to input
      switch (aswer) {
        case "view":
          console.log(taskList);
          break;

        case "add":
          const description = await askUser(
            "Please type the description of the task: "
          );
          const priority = await askUser(
            "how much is the priority of the task (1-5): "
          );
          const dueDate = await askUser("When is the due date of the task: ");
          createNewTask(taskList, description, priority, dueDate);
          console.log(taskList);
          break;

        case "edit":
          const editId = await askUser(
            "Please enter the ID of the task you want to update: "
          );
          const newDescription = await askUser(
            "Please enter the new description: "
          );

          const newPriority = await askUser("Please enter the new priority: ");
          const newDueDate = await askUser("Please enter the new date ");
          editTask(taskList, editId, newDescription, newPriority, newDueDate);

          break;

        case "remove":
          const removeId = await askUser(
            "Please enter the ID of the task you want to remove: "
          );
          removeTask(taskList, removeId);
          console.log(taskList);
          break;

        case "toggle":
          const toggleId = await askUser(
            "Please enter the ID of the task you want to change status: "
          );
          toggleStatus(taskList, toggleId);
          break;

        case "sort":
          const priorityType = await askUser(
            "Do you want to sort by low or high priority? "
          );
          showPriority(taskList, priorityType);
          break;

        case "exit":
          saveTaskList(taskList);
          exit = true;
          rl.close(); // Close the readline interface when done
          break;

        case "pending":
          showPending(taskList);
          break;

        case "completed":
          showCompleted(taskList);
          break;

        default:
          console.log("Invalid command, please try again");
          break;
      }
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

main();
