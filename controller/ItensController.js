const Quarto = require('../model/Quarto');

const getAll = async (req,res) => {
    try{
        const ListadeItens = await Quarto.find(); 
        return res.render("index", {ListadeItens});
    }
    catch(err){
        res.status(500).send({error: err.message})
    }

};

const creatItem = async (req,res)=>{
    const item=req.body;
    
    if(!item.item){
        return res.redirect("/");
    }
    try{
        await Quarto.create(item);
        return res.redirect("/");
    }
    catch(err){
        res.status(500).send({error: err.message});
    }
    
};

module.exports = {
    getAll,
    creatItem,
};