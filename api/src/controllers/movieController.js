const BaseController = require('./baseController');
const { MovieModel } = require('../models');

class MovieController extends BaseController {
  movieModel;

  constructor(req, res) {
    super(req, res);
    this.movieModel = new MovieModel();
  }

  getAll() {
    this.movieModel.getAll().then(([results]) => this.sendJson(results));
  }
}

module.exports = MovieController;
