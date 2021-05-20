DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department (
    id INT NOT NULL auto_increment,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL auto_increment,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id),
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL auto_increment,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    role_id INT,
    manager_id INT,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id),
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id),
    PRIMARY KEY (id)
);

SELECT name 
FROM department 
LEFT JOIN role 
ON department.id = role.department_id;

SELECT title, salary, department_id 
FROM role 
LEFT JOIN department 
ON role.department_id = department.id;

SELECT first_name, last_name, role_id, manager_id 
FROM employee 
JOIN role 
ON employee.role_id = role.department_id;