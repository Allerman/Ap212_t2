const routes = require("express").Router();
const ItensController = require("../controller/ItensController");

routes.get("/", ItensController.getAll);
routes.post("/create", ItensController.creatItem);

module.exports = routes;