// const { roleArr, employeeArr } = require("../utils/employees");
//
// const departmentPrompt = [
//   {
//     type: "input",
//     name: "firstName",
//     message: `What is the employee's first name?`,
//     validate: (firstNameInput) => {
//       if (firstNameInput) {
//         return true;
//       } else {
//         console.log("Please enter a first name!");
//         return false;
//       }
//     },
//   },
// ];
//
// const updateDepPrompt = [
//   {
//     type: "list",
//     name: "employee",
//     message: `Which employee would you like to update?`,
//     choices: employeeArr,
//   },
//   {
//     type: "list",
//     name: "role",
//     message: `What is the employee's new role?`,
//     choices: roleArr,
//   },
// ];
//
// module.exports = { employeePrompt, updateEmpPrompt };
