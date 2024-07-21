import { User } from "../models/User.models.js";


let listUser = [];

export const getUser = () =>{
    return listUser
}

export const createUser = (userName, phone, adress, email) => {
    const newUser = new User(userName, phone, adress, email);
    listUser.push(newUser);
    return newUser;
}

export const findUserId = (userId) => {
    return listUser.find(user => user.id == userId)
}
   