import pool from '../db/mysql2Connect';

export default class EmployeeDao {
    async create(data) {
        const [result] = await pool.execute(
            'INSERT INTO employees (empId, name, email, jobTitleId, deptId, isActive) VALUES (?, ?, ?, ?, ?, ?)',
            [data.empId, data.name, data.email, data.jobTitleId, data.deptId, data.isActive ?? 1]
        );
        return { data };
        //return { empId: result.insertId, ...data };
    }

    async findById(id) {
        const [rows] = await pool.execute('SELECT * FROM employees WHERE empId = ?', [id]);
        return rows[0] || null;
    }

    async findAll() {
        const [rows] = await pool.execute('SELECT * FROM employees WHERE isActive = 1');
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
        await pool.execute(query, values);

        return this.findById(empId);
    }

    async delete(id) {
        await pool.execute('UPDATE employees SET isActive = 0 WHERE empId = ?', [id]);
        return this.findById(id);
    }
}
