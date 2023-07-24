const Cozinha = require('../model/Cozinha');

const creatItemCozinha = async (req,res)=>{
    const item=req.body;
    
    if(!item.item){
        return res.redirect("/");
    }
    try{
        await Cozinha.create(item);
        return res.redirect("/");
    }
    catch(err){
        res.status(500).send({error: err.message});
    }
    
};

// const updateItemCheck = async (req, res) => {
//     const itemId = req.params.id;
//     const { check } = req.body;
  
//     try {
//       const updatedItem = await Cozinha.findByIdAndUpdate(itemId, { check }, { new: true });
//       if (!updatedItem) {
//         return res.status(404).send({ message: 'Item not found' });
//       }
//       res.send({ message: 'Item check updated successfully' });
//     } catch (err) {
//       res.status(500).send({ error: err.message });
//     }
//   };
const itemCheck = async (req, res) => {
    const itemId = req.params.id;
  
    try {
      const item = await Item.findOne({ _id: itemId });
  
      if (!item) {
        return res.status(404).send({ message: 'Item not found' });
      }
  
      item.check = !item.check; // Alternar entre true e false
  
      await item.save();
  
      res.redirect('/'); // Redirecionar para a página inicial após a atualização
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  };
  
module.exports = {
    creatItemCozinha,
    itemCheck,
}