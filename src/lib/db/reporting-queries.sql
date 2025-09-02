--List Employees with Department and Job Titles
SELECT e.empId, e.name, jt.jobTitle, d.deptName, w.baseSalary
FROM Employees e
INNER JOIN JobTitles jt ON e.jobTitleId = jt.jobTitleId
INNER JOIN Departments d ON e.deptId = d.deptId
INNER JOIN Wages w ON e.empId = w.empId;

--HR Report: Employee Count and Total Salary per Department
SELECT d.deptName, COUNT(e.empId) AS EmployeeCount, SUM(w.baseSalary) AS TotalSalary
FROM Employees e
INNER JOIN Departments d ON e.deptId = d.deptId
INNER JOIN Wages w ON e.empId = w.empId
GROUP BY d.deptName;
Find Employees with Salary Between 80k–90k
SELECT e.empId, e.name, w.baseSalary
FROM Employees e
INNER JOIN Wages w ON e.empId = w.empId
WHERE w.baseSalary BETWEEN 80000 AND 90000;
Search Employees by Name Pattern
SELECT * FROM Employees WHERE name LIKE 'Jan%';
Highest Salary Amount
SELECT MAX(baseSalary) AS HighestSalary
FROM Wages;
Employee record (empid, baseSalary) who has Highest Salary
SELECT empId, baseSalary
FROM Wages
WHERE baseSalary = (SELECT MAX(baseSalary) FROM Wages);
Employee record (all fields) who has Highest Salary
SELECT e.empId, e.name, e.email, jt.jobTitle, d.deptName, w.baseSalary
FROM Employees e
INNER JOIN Wages w ON e.empId = w.empId
INNER JOIN JobTitles jt ON e.jobTitleId = jt.jobTitleId
INNER JOIN Departments d ON e.deptId = d.deptId
WHERE w.baseSalary = (SELECT MAX(baseSalary) FROM Wages);
Second Highest Salary
SELECT empId, baseSalary FROM Wages
WHERE baseSalary = (
    SELECT MAX(baseSalary) FROM Wages
    WHERE baseSalary < (SELECT MAX(baseSalary) FROM Wages)
);
