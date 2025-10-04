import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";

import postRoutes from "./src/routes/post.route.js"
import commentRoutes from "./src/routes/comment.route.js";
import userRoutes from "./src/routes/user.route.js"
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
app.use(express.json());
app.use('/api/users',userRoutes);
app.use('/api/posts',postRoutes);
app.use('/api/comments',commentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is Listening at PORT No:  ${PORT}`);
})
