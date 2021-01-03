const express = require("express");

class App {
  constructor() {
    this.app = express();

    this.middlewares();
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use(require('./routes'));
  }
}

module.exports = new App().app;
