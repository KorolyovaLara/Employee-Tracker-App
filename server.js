const inquirer = require("inquirer");
const questions = require("./lib/questions");
const Logger = require("./lib/Logger");

// List of all variable
const log = new Logger();

const introScreen = {
  type: "list",
  name: "welcomeScreen",
  message: log.yellow(`
===========================================================================================
===================   Welcome to the Employee Tracker Application   =======================
= This program allows the user to managing a company's departments, roles, and employees. =
===========================================================================================
  `),
  message: "Would you like to load the Application?",
  choices: ["Yes, Start The Application", "No, Close The Application"],
};

const promptUser = () => {
  inquirer.prompt(questions).then((res) => {
    switch (res.initialPrompt) {
      case "View All Employees":
        viewAllEmployees();
        break;
      // case 'View All Employees By Department':
      //     break;
      // case 'View All Employees By Manager':
      //     break;
      case "Add Employee":
        addEmployee();
        break;
      // case 'Remove Employee':
      //     break;
      case "Update Employee Role":
        updateEmployee();
        break;
      // case 'Update Employee Manager':
      //     break;
      case "View All Roles":
        viewAllRoles();
        break;
      case "Add Role":
        addRole();
        break;
      // case 'Remove Role':
      //     break;
      case "View All Departments":
        viewAllDepartments();
        break;
      case "Add Department":
        addDepartment(res.department);
        break;
      // case 'Delete Department':
      //     break;
      // case 'View Utilized Budget':
      //     break;
      case "Quit":
        quit();
        log.magenta(`
===========================================================================================
===============================   Application is Closed   =================================
===========================================================================================
        `);
        break;
    }
  });
};

function startApp() {
  inquirer.prompt(introScreen).then((runApp) => {
    if (runApp.welcomeScreen === "Yes, Start The Application") {
      log.cyan("Loading...");
      promptUser();
    } else {
      log.magenta(`
===========================================================================================
===============================   Application is Closed   =================================
===========================================================================================
        `);
    }
  });
}
// Call startApp function to start the Application
startApp();

module.exports = { promptUser };
const { quit } = require("./utils/index");
const {
  viewAllEmployees,
  addEmployee,
  updateEmployee,
} = require("./utils/employeesDB");
const { viewAllRoles, addRole } = require("./utils/rolesDB");
const { viewAllDepartments, addDepartment } = require("./utils/departmentsDB");
