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
    const { idCat, userId } = req.body;
    const updatecat = adoptedCat(idCat, userId)
    
    if (typeof updatedCat === 'string') { 
        return res.status(404).json({ message: updatecat });
      } 
      else {
        return res.status(200).json({ message: "Gato adotado com sucesso!", cat: updatecat });
      }
    
    
    });
  export { catRouter };