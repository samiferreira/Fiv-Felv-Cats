import { Cat } from "../models/cat.models.js";
import { findUserId } from "./user.controller.js";


let listCat = 
[
  new Cat("Jorge", 1, true, false, 'jorge.jpeg'),
  new Cat("Zeus", 2, true, true, 'zeus.jpg'),
  new Cat("Peter", 3, false, true,'peter.jpeg'),
  new Cat("Carlos", 4, true, true, 'carlos.jpeg') ]; 

export const getCat = () =>{
    return listCat
}

export const createCat = (name, age, fiv, felv, imageUrl = null) => { 
  const newCat = new Cat(name, age, fiv, felv, imageUrl);
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

