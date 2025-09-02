I already have a Next.js REST API with GameService, GameDao, and gameValidator under src/lib.
Now I want to add an Employee REST API in the same style.

Requirements:
Use ESM modules.
Use Sequelize + mysql2 for ORM.
Add a Sequelize model for Employee (see ddl.sql for schema)
Create EmployeeDao.js with CRUD methods (create, findById, findAll, update, delete).
Create EmployeeService.js that calls DAO methods and applies basic business logic.
Create employeeValidator.js for validating create/update payloads (use zod).
Add Next.js API routes under src/app/api/employees
	GET /api/employees → list employees
	GET /api/employees/[id] → fetch one employee
	POST /api/employees → create employee
	PATCH /api/employees/[id] → update employee
	DELETE /api/employees/[id] → soft delete (set isActive = false)
Include a minimal Sequelize init file (src/lib/db/sequelize.js)
Use the same folder structure I already have (lib/dao, lib/services, lib/validators).

Once Employee functionality is done, we need to do the same for other entities too from the ddl.sql.

My MySQL server is running at localhost:3306, using root user. Keep the server & user details in the local environment variables file.

Keep the code minimal and working end-to-end.