import EmployeeDao from '../dao/EmployeeDao';
import { validateCreate, validateUpdate } from '../validators/EmployeeValidator';

export default class EmployeeService {
  constructor(dao = new EmployeeDao()) {
    this.dao = dao;
  }

  async create(employee) {
    validateCreate(employee);
    return await this.dao.create(employee);
  }

  async getById(id) {
    return await this.dao.findById(id);
  }

  async getAll() {
    return await this.dao.findAll();
  }

  async update(id, employee) {
    validateUpdate(employee);
    return await this.dao.update(id, employee);
  }

  async delete(id) {
    return await this.dao.delete(id);
  }
}
