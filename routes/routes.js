const routes = require("express").Router();
const ItensController = require("../controller/ItensController");

routes.get("/", ItensController.getAll)

module.exports = routes