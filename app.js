import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {test} from "./backend/controllers/datos.controllers.js";

dotenv.config();
mongoose.connect(process.env.url_bd)
.then(()=>console.log("conectado"))
.catch((ERROR)=>console.log("No esta funcionando"))

const app=express();
app.use(cors())
app.listen(4000,()=> console.log("Todo funciona bien"))
test();
