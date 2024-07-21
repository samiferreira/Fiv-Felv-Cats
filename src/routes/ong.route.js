import { Router } from "express";
import { getOng, updateOng } from "../controllers/ong.controller.js";


const ongRouter = Router()

ongRouter.get("/ong", (req, res)=>{
    const ongInfo = getOng()
    res.status(200).json({ongInfo})
    
})

ongRouter.patch("/ong", (req,res)=> {
    const reqOng = req.body
    const upOng = updateOng(reqOng)
    res.status(200).json({ upOng });
});

export {ongRouter} 