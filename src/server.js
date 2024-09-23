import express from "express"
import cors from "cors"
import { ongRouter } from "./routes/ong.route.js";
import { catRouter } from "./routes/cat.route.js";
import { userRouter } from "./routes/user.route.js";

const app = express() 
const port = 4000

app.use(express.static('public')); 


app.use(cors({
  origin: 'http://localhost:5173' 
}));

app.use(express.json());

app.use(ongRouter)
app.use(catRouter)
app.use(userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

