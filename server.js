const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Be sure to update with your own MySQL password!
  password: "",
  database: "employee_db",
});

connection.connect((err) => {
  if (err) throw err;
  init();
});

function init() {
  let departments = () => {
    inquirer
      .prompt({
        name: "choose",
        type: "list",
        message: "Choose what you want to do?",
        choices: [
          "Add a department",
          "Add a role",
          "Add an employee",
          "View a department",
          "View a role",
          "View an employee",
          "Update employee roles",
        ],
      })
      .then((answer) => {});
  };
}
