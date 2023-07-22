const Quarto = require('../model/Quarto');

const getQ = async (req,res) => {
    try{
        const ListaQuarto = await Quarto.find(); 
        return res.render("index", {ListaQuarto});
    }
    catch(err){
        res.status(500).send({error: err.message})
    }

};

const creatItemQuarto = async (req,res)=>{
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
    creatItemQuarto,
    getQ,
}