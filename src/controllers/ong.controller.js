import { Ong } from "../models/ong.models.js";

let ong = new Ong (3196776-9676, 'rua olianda', 'teste.test@ong.com.br','gatos')

export const getOng = () =>{
    return ong
}

export const updateOng = (req) =>{
    if (req.phone) {
        ong.phone = req.phone      
    } 
    if (req.name) {
        ong.name = req.name     
    } 
    if (req.email) {
        ong.email = req.email  
    } 
     
}


