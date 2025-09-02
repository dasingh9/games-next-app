import EmployeeDao from '../dao/EmployeeDao';
import { validateCreate, validateUpdate } from '../validators/EmployeeValidator';

export default class EmployeeService {
  constructor(dao = new EmployeeDao()) {
    this.dao = dao;
  }

  async create(data) {
    validateCreate(data);
    return await this.dao.create(data);
  }

  async getById(id) {
    return await this.dao.findById(id);
  }

  async getAll() {
    return await this.dao.findAll();
  }

  async update(id, data) {
    validateUpdate(data);
    return await this.dao.update(id, data);
  }

  async delete(id) {
    return await this.dao.delete(id);
  }
}
