import Employee from '../db/models/Employee.js';

export default class EmployeeDao {
  async create(data) {
    return await Employee.create(data);
  }
  async findById(id) {
    return await Employee.findByPk(id);
  }
  async findAll() {
    return await Employee.findAll({ where: { isActive: true } });
  }
  async update(id, data) {
    const emp = await Employee.findByPk(id);
    if (!emp) return null;
    await emp.update(data);
    return emp;
  }
  async delete(id) {
    const emp = await Employee.findByPk(id);
    if (!emp) return null;
    await emp.update({ isActive: false });
    return emp;
  }
}
