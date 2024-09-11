import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const databaseURI = process.env.DATABASE_URI

const dbConnection = mongoose.connect(process.env.DATABASE_URI)

const server = app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
    console.log(dbConnection);
    
})



