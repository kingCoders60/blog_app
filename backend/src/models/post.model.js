import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:{
        type:string,
        required:true
    },
    content:{
        type:string,
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,ref:'User',
        required:true
    },
    tag:{
        type:String
    },
    createdAt:{
        type:Date.now,
    },
    updatedAt:{
        type:Date,
        default: Date.now
    }
},{timestamps:true});