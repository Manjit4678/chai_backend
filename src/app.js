//import express from "express"
import bodyParser from "body-parser";
import cors from "cors"
import cookieParser from "cookie-parser"
import {app} from "../src/app.js"

//const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credential:true
}))

app.use((bodyParser.json()))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

app.use(cookieParser())


//routes

import userRouter from'./routes/user.routes.js'
import bodyParser from "body-parser";




//routes declaration 
app.use("/api/v1/users",userRouter)

//http://localhost:8000/api/v1/users/register



export{app}