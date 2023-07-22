const routes = require("express").Router();

const QuartoController = require("../controller/QuartoController");
const CozinhaController = require("../controller/CozinhaController");
const LavanderiaController = require("../controller/LavanderiaController");
const BanheiroController = require("../controller/BanheiroController");

routes.get("/Q", QuartoController.getQ);
routes.get("/C", CozinhaController.getC);
routes.get("/L", LavanderiaController.getL);
routes.get("/B", BanheiroController.getB);

routes.post("/Quarto", QuartoController.creatItemQuarto);
routes.post("/Cozinha", CozinhaController.creatItemCozinha);
routes.post("/Lavanderia", LavanderiaController.creatItemLavanderia);
routes.post("/Banheiro", BanheiroController.creatItemBanheiro);

module.exports = routes;