const questions = [
  {
    type: "list",
    name: "initialPrompt",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      // 'View All Employees By Department', bonus
      // 'View All Employees By Manager', bonus
      "Add Employee",
      // 'Remove Employee', bonus
      "Update Employee Role",
      // 'Update Employee Manager', bonus
      "View All Roles",
      "Add Role",
      // 'Remove Role', bonus
      "View All Departments",
      "Add Department",
      // 'Delete Department', bonus
      // 'View Utilized Budget' bonus
      "Quit",
    ],
  },
  {
    type: "input",
    name: "department",
    message: `What department would you like to add?`,
    when: ({ initialPrompt }) => {
      if (initialPrompt === "Add Department") {
        return true;
      } else {
        return false;
      }
    },
    validate: (departmentInput) => {
      if (departmentInput) {
        return true;
      } else {
        console.log("Please enter a department!");
        return false;
      }
    },
  },
];

module.exports = questions;
