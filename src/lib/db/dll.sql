CREATE DATABASE EmpDB;
USE EmpDB;

CREATE TABLE Departments (
    deptId INT PRIMARY KEY,
    deptName VARCHAR(100) NOT NULL
);

CREATE TABLE JobTitles (
    jobTitleId INT PRIMARY KEY,
    jobTitle VARCHAR(100) NOT NULL
);

CREATE TABLE Employees (
    empId INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(70) NOT NULL,
    jobTitleId INT,
    deptId INT,
    joiningDate DATE,
    isActive BOOLEAN DEFAULT TRUE,
    dateCreated DATE DEFAULT CURRENT_DATE,
    dateLastUpdated DATE,
    FOREIGN KEY (jobTitleId) REFERENCES JobTitles(jobTitleId),
    FOREIGN KEY (deptId) REFERENCES Departments(deptId)
);

CREATE TABLE Wages (
    empId INT PRIMARY KEY,
    baseSalary DECIMAL(10,2),
    FOREIGN KEY (empId) REFERENCES Employees(empId)
);

CREATE TABLE PhoneNumbers (
    empId INT,
    phone VARCHAR(20),
    phoneType VARCHAR(20) NOT NULL,
    PRIMARY KEY (phone),
    FOREIGN KEY (empId) REFERENCES Employees(empId)
);