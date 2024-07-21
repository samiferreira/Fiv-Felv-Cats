import { v4 as uuidv4 } from "uuid";

export class Ong {
    constructor(phone, adress, email, name){
        this.id = uuidv4();
        this.name = name;
        this.phone = phone;
        this.adress = adress;
        this.email = email;
    }
}