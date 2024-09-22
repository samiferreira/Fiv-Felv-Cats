import { v4 as uuidv4 } from "uuid";

export class User{
    constructor(userName, phone, adress, email, depoiment){
        this.id = uuidv4();
        this.userName = userName;
        this.phone = phone;
        this.adress = adress;
        this.email = email;
        this.depoiment = depoiment;      
    }
}