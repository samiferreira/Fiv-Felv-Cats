import { User } from "../models/User.models.js";

let listUser = [
    new User("Sami", 31999998888, "Rua Santa Rita Durão 1143", "sami@gmail.com"),
    new User("Alicia", 31888887777, "123 Fake St", "ana@gmail.com"),
    new User("Carlos", 31777776666, "456 Imaginary Ave", "carlos@gmail.com"),
    new User("Maria", 31666665555, "789 Make-Believe Blvd", "maria@gmail.com"),
    new User("João", 31555554444, "321 Fictional Road", "joao@gmail.com")
]

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
   