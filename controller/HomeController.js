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

const deleteItem = async (req, res) => {
  const itemId = req.params.id;

  try {
    const deletedItemQ = await Quarto.findByIdAndDelete(itemId);
    const deletedItemC = await Cozinha.findByIdAndDelete(itemId);
    const deletedItemL = await Lavanderia.findByIdAndDelete(itemId);
    const deletedItemB = await Banheiro.findByIdAndDelete(itemId);
    if (!deletedItemQ && !deletedItemC && !deletedItemL && !deletedItemB) {
      return res.status(404).send({ message: 'Item not found' });
    }
    res.send({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
                                
module.exports = {
  getAllItems,
  deleteItem,
};