const Banheiro = require('../model/Banheiro');

const getB = async (req,res) => {
    try{
        const ListaBanheiro = await Banheiro.find(); 
        return res.render("index", {ListaBanheiro});
    }
    catch(err){
        res.status(500).send({error: err.message})
    }

};

const creatItemBanheiro = async (req,res)=>{
    const item=req.body;
    
    if(!item.item){
        return res.redirect("/");
    }
    try{
        await Banheiro.create(item);
        return res.redirect("/");
    }
    catch(err){
        res.status(500).send({error: err.message});
    }
    
};

module.exports = {
    creatItemBanheiro,
    getB,
}