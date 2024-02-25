import express,{ Express } from "express"
import { PrismaClient } from "@prisma/client"
const prisma=new PrismaClient()
import router from "./routes/users";
const app: Express = express(); 
const PORT=5000
app.use(express.json());
app.use('/user',router)
app.listen(PORT,()=>{
    console.log("server is running on PORT:",PORT)
})