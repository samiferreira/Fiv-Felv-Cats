import { v4 as uuidv4  } from "uuid";

export class Cat{
    constructor(name, age, fiv, felv, imageUrl= null) {
        this.id = uuidv4();
        this.userId = null;
        this.name = name;
        this.age = age;
        this.fiv = fiv;
        this.felv = felv;
        this.adopted = false;
        this.imageUrl = imageUrl ? `http://localhost:4000/imagem/${imageUrl}` : null;
    
    }
}

