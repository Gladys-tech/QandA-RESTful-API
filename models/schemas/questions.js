import mongoose from "mongoose";

const Schema = mongoose.Schema;

//create Schema
const QuestionSchema = new Schema({
    username:{
        type:String,
        required: true
    },
    question:{
        type:String,
        required: true
    },
    role:{
        type:String,
        required:true
    }
});

export const ItemModel = mongoose.model('question',QuestionSchema);