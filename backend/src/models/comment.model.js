import mongoose from "mongoose";

const commenSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{timestamps:true});

export default mongoose.model("Comment",commenSchema);