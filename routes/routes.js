const routes = require("express").Router();

const HomeController = require("../controller/HomeController")
const QuartoController = require("../controller/QuartoController");
const CozinhaController = require("../controller/CozinhaController");
const LavanderiaController = require("../controller/LavanderiaController");
const BanheiroController = require("../controller/BanheiroController");

routes.get("/", HomeController.getAllItems);
routes.put('/atualizar/:id', CozinhaController.itemCheck);
routes.delete('/deletar/:id', HomeController.deleteItem);
routes.post("/Quarto", QuartoController.creatItemQuarto);
routes.post("/Cozinha", CozinhaController.creatItemCozinha);
routes.post("/Lavanderia", LavanderiaController.creatItemLavanderia);
routes.post("/Banheiro", BanheiroController.creatItemBanheiro);

module.exports = routes;