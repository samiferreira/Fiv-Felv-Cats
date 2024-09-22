import { User } from "../models/User.models.js";

let listUser = [
    new User("Sami", 31999998888, "Rua Santa Rita Durão 1143", "sami@gmail.com", "Decidi abrir meu lar para um gatinho FIV+ e foi a melhor escolha que eu poderia ter feito! Muitas pessoas me questionaram, preocupadas com a condição dele, mas a verdade é que ele é um gato como qualquer outro, cheio de vida e amor para dar. Ele me ensinou sobre compaixão, responsabilidade e a importância de dar uma chance a quem precisa. Agradeço todos os dias por tê-lo em minha vida!"),

    new User("Alice", 31888887777, "123 Fake St", "ana@gmail.com","Quando adotei meu gato, descobri que ele era FeLV+. Fiquei assustada no início, confesso, mas o amor que senti por ele foi maior que qualquer medo. Ele é brincalhão, carinhoso e me faz sorrir todos os dias. É claro que ele precisa de cuidados especiais, mas nada que seja um fardo. A felicidade que ele trouxe para minha vida é imensurável e me mostrou que a adoção responsável pode transformar vidas, tanto a nossa quanto a deles."),

    new User("pedro", 31888887777, "123 Fake St", "ana@gmail.com","Meu gatinho FIV+ é a prova de que o amor supera qualquer obstáculo. Ele é cheio de energia, adora brincar e me enche de carinho. É importante desmistificar a ideia de que gatos FIV+ ou FeLV+ são diferentes ou incapazes de ter uma vida normal. Com acompanhamento veterinário adequado e muito amor, eles vivem felizes e saudáveis. Adotar é um ato de amor e responsabilidade, e ver meu gatinho feliz me mostra que fiz a escolha certa.") 


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
   