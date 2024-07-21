import { request, Router } from "express";
import { createCat, getCat, adoptedCat} from "../controllers/cat.controller.js";

const catRouter = Router()

catRouter.get("/cat", (req, res)=>{
    const cat = getCat()
    res.status(200).json({cat})
    
})

catRouter.post("/cat", (req,res)=> {
    const {name, age, fiv, felv} = req.body;
    const newCat = createCat(name, age, fiv, felv);
    res.status(201).json({newCat});
});


catRouter.patch("/cat/adopt", (req, res) => {
    try{
        const updateCat = adoptedCat(request.idCat, request.userId);
        
        if(typeof updateCat ==='string'){
            return res.status(404).json({message: updateCat});
        }else{
            return res.status(200).json({message:'gato adotado com sucesso', cat: updateCat});
        }
    }
    catch(err){
        return res.status(500).json('internal error.');
    }
}); 
  export { catRouter };