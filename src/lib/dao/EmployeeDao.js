import db from '../db/mysql2Connect';

export default class EmployeeDao {
    async create(data) {
        const [result] = await db.execute(
            'INSERT INTO employees (empId, name, email, jobTitleId, deptId, isActive) VALUES (?, ?, ?, ?, ?, ?)',
            [data.empId, data.name, data.email, data.jobTitleId, data.deptId, data.isActive ?? 1]
        );
        return { data };
        //return { empId: result.insertId, ...data };
    }

    async findById(id) {
        const [rows] = await db.execute('SELECT * FROM employees WHERE empId = ?', [id]);
        return rows[0] || null;
    }

    async findAll() {
        const sql = `SELECT emp.*, jt.jobTitle, dpt.deptName FROM employees as emp
                        INNER JOIN JobTitles as jt ON jt.JobTitleId=emp.JobTitleId
                        INNER JOIN Departments as dpt ON dpt.deptId=emp.deptId
                        WHERE isActive = 1`

        const [rows] = await db.execute(sql);
        return rows;
    }

    async update(empId, data) {
        const { name, email, jobTitleId, deptId, isActive } = data;

        // Nothing to update
        if (
            name === undefined &&
            email === undefined &&
            jobTitleId === undefined &&
            deptId === undefined &&
            isActive === undefined
        ) return null;

        const query = `
            UPDATE employees
            SET
            name = COALESCE(?, name),
            email = COALESCE(?, email),
            jobTitleId = COALESCE(?, jobTitleId),
            deptId = COALESCE(?, deptId),
            isActive = COALESCE(?, isActive)
            WHERE empId = ?
        `;

        const values = [name, email, jobTitleId, deptId, isActive, empId];
        await db.execute(query, values);

        return this.findById(empId);
    }

    async delete(id) {
        await db.execute('UPDATE employees SET isActive = 0 WHERE empId = ?', [id]);
        return this.findById(id);
    }
}
