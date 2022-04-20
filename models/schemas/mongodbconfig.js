import mongoose from 'mongoose'

//acessing the database
const connectDB = ()=>{
    try {
        mongoose.connect(process.env.DB_URI);  
    } catch (error) {
        console.log('error');
    }
}

export default connectDB;