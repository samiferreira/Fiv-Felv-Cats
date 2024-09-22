import { Router } from "express";
import { createUser, getUser } from "../controllers/user.controller.js";

const userRouter = Router()

userRouter.get("/user", (req, res)=>{
    const user = getUser()
    res.status(200).json(user)
    
})

userRouter.post("/user", (req,res)=> {
    const {userName, phone, adress, email} = req.body;
    const newUser = createUser(userName, phone, adress, email);
    res.status(201).json({newUser});
});

export {userRouter}