USE employee_db;

INSERT INTO department(name)
VALUES
("Operations"),
("Warehouse"),
("Finance"),

INSERT INTO role(title, salary, department_id)
VALUES
("Operations Manager", 120000, 1),
("Operations Coordintor", 80000, 1),
("Truck Driver", 100000, 1),
("Warehouse Manager", 150000, 2),
("Forklift Driver", 60000, 2),
("Accountant", 120000, 3),
("Business Manager", 250000, 3),

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
("Carl", "Vaughan", 1, NULL),
("Anthony", "Arnold", 2, 1),
("Mary", "Butler", 2, 1),
("Christopher", "Chapman", 3, 1),
("Victor", "Walker", 3, 1),
("Alexander", "Butler", 4, NULL),
("Jennifer", "Kerr", 5, 4),
("Ian",	"McGrath", 5, 4),
("Victoria", "Watson", 6, NULL),
("Megan", "Langdon", 7, NULL),