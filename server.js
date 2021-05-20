// List of all packages needed for this application

const startPrompt = require("./lib/startQuestons");
const Logger = require("./lib/Logger");

// List of all variable
const log = new Logger();

// Intro for Application
//const db = new Database();
//
//db.open()
//  .then(() => {
//    /* Initial startup display */
//    log.green(`
//    === Welcome to the Employee Tracker Application ===
//    This program allows the user to managing a company's departments, roles, and employees.
//    ===================================================
//    `);
//
//    /* Process inquirer questions */
//    return startPrompt(db);
//  })
//  /* Shutdown display and close database connection */
//  .then(() => {
//    log.red(`
//    ===================================================
//    Exiting the Application!
//    `);
//    db.close();
//  });
