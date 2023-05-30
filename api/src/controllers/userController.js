const BaseController = require('./baseController');
const { UserModel } = require('../models');

class UserController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new UserModel();
  }
}

module.exports = UserController;
