const { askUser, rl } = require("./userInterface");
const {
  taskList,
  createNewTask,
  removeTask,
  toggleStatus,
} = require("./tasks");

let exit = false;

async function main() {
  try {
    while (!exit) {
      const aswer = await askUser(
        "What do you want to do? (add/remove/toggle/view/exit) "
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
          createNewTask(description, priority, dueDate);
          console.log(taskList);
          break;

        case "remove":
          const removeId = await askUser(
            "Please enter the ID of the task you want to remove: "
          );
          removeTask(removeId);
          console.log(taskList);
          break;

        case "toggle":
          const toggleId = await askUser(
            "Please enter the ID of the task you want to change status:"
          );
          toggleStatus(toggleId);
          break;

        case "exit":
          exit = true;
          rl.close(); // Close the readline interface when done
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
