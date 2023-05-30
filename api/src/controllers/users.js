const { UserModel } = require('../models');

const getAllUsers = (req, res) => {
  const userModel = new UserModel();
  userModel
    .getAll()
    .then(function ([results, useless]) {
      return res.status(200).json(results);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllUsers,
};
