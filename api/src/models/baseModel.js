const { db } = require('../config');

class BaseModel {
  //déclaration des éléments du constructor
  table;
  db;

  constructor(table) {
    this.table = table;
    this.db = db;
  }

  getAll() {
    return this.db.query(`SELECT * FROM ${this.table}`);
  }

  getById(id) {
    return this.db.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id]);
  }
}

module.exports = BaseModel;
