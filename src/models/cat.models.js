import { v4 as uuidv4  } from "uuid";

export class Cat{
    constructor(name, age, fiv, felv){
        this.id = uuidv4();
        this.userId = null;
        this.name = name;
        this.age = age;
        this.fiv = fiv;
        this.felv = felv;
        this.adopted = false;
    }
}

