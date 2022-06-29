"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async login() {
    const { ctx } = this;
    ctx.body = { code: 200, data: [{ ctx }] };
  }
}

module.exports = HomeController;
