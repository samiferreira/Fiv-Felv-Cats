import express from "express"
import { ongRouter } from "./routes/ong.route.js";
import { catRouter } from "./routes/cat.route.js";
import { userRouter } from "./routes/user.route.js";

const app = express() 
const port = 4000

app.use(express.json());

app.use(ongRouter)
app.use(catRouter)
app.use(userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})