const inquirer = require("inquirer");
const { connection, dbQuery } = require("./index");
const Logger = require("../lib/Logger");

// List of all variable
const log = new Logger();
const deptArr = [];

const viewAllRoles = () => {
  const sql = `SELECT roles.id as 'Role ID', roles.title AS 'Job Title', departments.name as Department, roles.salary as Salary
        FROM roles INNER JOIN departments ON departments.id = roles.department_id`;
  log.green(`
*
*
Displaying all Roles:`);
  dbQuery(sql, false, false, true);
};

const addRole = () => {
  // gets all possible departments
  connection.query(`SELECT * from departments`, (err, res) => {
    if (err) {
      throw err;
    }

    res.forEach((row) => {
      deptArr.push({
        id: row.id,
        name: row.name,
      });
    });
  });

  inquirer.prompt(rolePrompt).then((input) => {
    const deptId = deptArr.filter((dept) => input.department === dept.name)[0]
      .id;

    const sql = `INSERT INTO roles (title, salary, department_id)
                VALUES (?, ?, ?)`;
    const params = [input.title, input.salary, deptId];

    dbQuery(
      sql,
      params,
      log.red(`
  Successfully added a new Role!
  ====    ====    ====    ====    ====    ====    ====    ====    ====    =====

  `)
    );
  });
};

module.exports = { viewAllRoles, addRole, deptArr };
const rolePrompt = require("../lib/roles");
