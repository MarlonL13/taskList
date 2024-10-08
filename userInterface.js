const readline = require("readline");

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

function showAll(){

}

module.exports = { askUser, rl, showAll };
