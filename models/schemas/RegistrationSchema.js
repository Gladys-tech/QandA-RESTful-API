import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserModel = new Schema(
    {
        firstname:String,
        lastname:String,
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
    }
)

export default mongoose.model('Registereduser',UserModel);