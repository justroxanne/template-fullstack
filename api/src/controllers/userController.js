const BaseController = require('./baseController');
const { UserModel } = require('../models');

class UserController extends BaseController {
  userModel;

  constructor(req, res) {
    super(req, res);
    this.userModel = new UserModel();
  }

  getAll() {
    this.userModel.getAll().then(([results]) => this.sendJson(results));
  }
}

module.exports = UserController;
