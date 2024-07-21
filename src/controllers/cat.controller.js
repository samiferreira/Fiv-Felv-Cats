import { Cat } from "../models/cat.models.js";
import { findUserId } from "./user.controller.js";

let listCat = [
  new Cat("Jorge", 1, true, false),
  new Cat("Zeus", 2, false, false)
];

export const getCat = () =>{
    return listCat
}

export const createCat = (name, age, fiv, felv) => {
    const newCat = new Cat(name, age, fiv, felv);
    listCat.push(newCat);
    return newCat;
}

export const adoptedCat = (catId, userId) => {
    const catIndex = listCat.findIndex(cat => cat.id === catId);
  
    if (catIndex === -1) {
      return "Gato não encontrado"; 
    }
  
    const userAlreadyExist = findUserId(userId);
  
    if (!userAlreadyExist) {
      return "Usuário não encontrado";
    }
  
    listCat[catIndex].adopted = true;
    listCat[catIndex].userId = userId; 
  
    return listCat[catIndex];
  };

