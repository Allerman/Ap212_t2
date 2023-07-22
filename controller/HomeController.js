const Quarto = require('../model/Quarto');
const Cozinha = require('../model/Cozinha');
const Lavanderia = require('../model/Lavanderia');
const Banheiro = require('../model/Banheiro');

const getAllItems = async (req, res) => {
  try {
    const ListaQuarto = await Quarto.find();
    const ListaCozinha = await Cozinha.find();
    const ListaLavanderia = await Lavanderia.find();
    const ListaBanheiro = await Banheiro.find();

    return res.render('index', {
      ListaQuarto,
      ListaCozinha,
      ListaLavanderia,
      ListaBanheiro,
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAllItems,
};