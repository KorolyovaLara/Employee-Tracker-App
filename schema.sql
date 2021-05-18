DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREAMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id),
)

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREAMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id),
    PRIMARY KEY (id), 
        
)

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREAMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    role_id INT,
    manager_id INT,
    CONSTRAINT fk_role  FOREIGN KEY (role_id) REFERENCES role(id),
    CONSTRAINT fk_manager  FOREIGN KEY (manager_id) REFERENCES employee(id),
    PRIMARY KEY (id), 
)
