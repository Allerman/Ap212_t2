const Cozinha = require('../model/Cozinha');

const getC = async (req,res) => {
    try{
        const ListaCozinha = await Cozinha.find(); 
        return res.render("index", {ListaCozinha});
    }
    catch(err){
        res.status(500).send({error: err.message})
    }

};

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

module.exports = {
    creatItemCozinha,
    getC,
}