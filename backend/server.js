import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";


dotenv.config();
const connectDB = async()=>{
    try {   
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDb is connected Successfully!");
        
    } catch (error) {
        console.log("MongoDb Connection Error!!");
        process.exit(1);
    }
}
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is Listening at PORT No:  ${PORT}`);
})
