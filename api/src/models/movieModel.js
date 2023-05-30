const BaseModel = require('./baseModel');

class UserModel extends BaseModel {
  constructor() {
    super('movies');
  }
}

module.exports = UserModel;
