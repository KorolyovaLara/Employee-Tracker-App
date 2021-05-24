const inquirer = require("inquirer");
const Logger = require("../lib/Logger");

// List of all variable
const log = new Logger();
const roleArr = [];
const employeeArr = [];

const viewAllEmployees = () => {
  const sql = `
  SELECT e1.id as ID, CONCAT(e1.first_name, ' ', e1.last_name) as 'Employee Name', 
  departments.name AS Department, roles.title as 'Job Title', roles.salary as Salary, 
  CONCAT(e2.first_name, ' ', e2.last_name) AS Manager
  FROM employees AS e1 INNER JOIN roles ON e1.role_id = roles.id
  INNER JOIN departments ON departments.id = roles.department_id
  LEFT JOIN employees AS e2 ON e1.manager_id = e2.id`;
  log.green(`
*
*
Displaying all Employees:`);
  dbQuery(sql, false, false, true);
};

const addEmployee = () => {
  // Gets all possible roles
  connection.query(`SELECT id, title AS name FROM roles`, (err, res) => {
    if (err) {
      throw err;
    }

    res.forEach((row) => {
      roleArr.push({
        id: row.id,
        name: row.name,
      });
    });
  });

  // Gets all employees as possible managers
  connection.query(
    `SELECT id, CONCAT(employees.first_name, ' ', employees.last_name) AS name FROM employees`,
    (err, res) => {
      if (err) {
        throw err;
      }

      res.forEach((row) => {
        employeeArr.push({
          id: row.id,
          name: row.name,
        });
      });
    }
  );

  inquirer.prompt(employeePrompt).then((input) => {
    const roleId = roleArr.filter((role) => input.role === role.name)[0].id;
    const managerId = employeeArr.filter(
      (manager) => input.manager === manager.name
    )[0].id;

    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
                VALUES (?, ?, ?, ?)`;
    const params = [input.firstName, input.lastName, roleId, managerId];

    connection.query(sql, params, (err, res) => {
      if (err) {
        throw err;
      }

      log.red(`
New Employee => ${input.firstName} ${input.lastName} <= has been added!
====    ====    ====    ====    ====    ====    ====    ====    ====    =====

      `);
      promptUser();
    });
  });
};

const updateEmployee = () => {
  // Gets all possible roles
  connection.query(`SELECT id, title AS name FROM roles`, (err, res) => {
    if (err) {
      throw err;
    }

    res.forEach((row) => {
      roleArr.push({
        id: row.id,
        name: row.name,
      });
    });
  });

  // Gets all employees as possible employees
  connection.query(
    `SELECT id, CONCAT(employees.first_name, ' ', employees.last_name) AS name FROM employees`,
    (err, res) => {
      if (err) {
        throw err;
      }

      res.forEach((row) => {
        employeeArr.push({
          id: row.id,
          name: row.name,
        });
      });
      prompt();
    }
  );

  const prompt = function () {
    inquirer.prompt(updateEmpPrompt).then((input) => {
      const employeeId = employeeArr.filter(
        (employee) => input.employee === employee.name
      )[0].id;
      const roleId = roleArr.filter((role) => input.role === role.name)[0].id;

      const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;
      const params = [roleId, employeeId];

      connection.query(sql, params, (err, res) => {
        if (err) {
          throw err;
        }
        log.red(`
Successfully updated the employee!
====    ====    ====    ====    ====    ====    ====    ====    ====    =====
    
        `);
        promptUser();
      });
    });
  };
};

module.exports = {
  viewAllEmployees,
  addEmployee,
  updateEmployee,
  roleArr,
  employeeArr,
};

const { promptUser } = require("../server");
const { connection, dbQuery } = require("./index");
const { employeePrompt, updateEmpPrompt } = require("../lib/employees");
