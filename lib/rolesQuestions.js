const { deptArr } = require("../utils/roles");

const rolePrompt = [
  {
    type: "input",
    name: "title",
    message: `What is the title of the new role?`,
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "salary",
    message: `What is the salary for the new role?`,
    validate: (salaryInput) => {
      if (salaryInput) {
        return true;
      } else {
        console.log("Please enter a salary!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "department",
    message: `What department is this role under?`,
    choices: deptArr,
  },
];

module.exports = rolePrompt;
