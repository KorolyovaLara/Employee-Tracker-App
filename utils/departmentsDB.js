const { connection, dbQuery } = require("./index");
const Logger = require("../lib/Logger");

// List of all variable
const log = new Logger();

const viewAllDepartments = () => {
  const sql = `SELECT departments.id as 'Dept. ID', departments.name AS Departments FROM departments`;
  log.green(`
*
*
Displaying all Departments:`);
  dbQuery(sql, false, false, true);
};

const addDepartment = (name) => {
  const sql = `INSERT INTO departments (name) VALUES (?)`;
  const params = [name];
  dbQuery(
    sql,
    params,
    log.red(`
New department => ${name} <= has been added!
====    ====    ====    ====    ====    ====    ====    ====    ====    =====

  `)
  );
};

module.exports = { viewAllDepartments, addDepartment };
