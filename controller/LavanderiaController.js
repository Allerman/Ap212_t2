const Lavanderia = require('../model/Lavanderia');

const getL = async (req,res) => {
    try{
        const ListaLavanderia = await Lavanderia .find(); 
        return res.render("index", {ListaLavanderia});
    }
    catch(err){
        res.status(500).send({error: err.message})
    }

};

const creatItemLavanderia = async (req,res)=>{
    const item=req.body;
    
    if(!item.item){
        return res.redirect("/");
    }
    try{
        await Lavanderia.create(item);
        return res.redirect("/");
    }
    catch(err){
        res.status(500).send({error: err.message});
    }
    
};

module.exports = {
    creatItemLavanderia,
    getL,
}