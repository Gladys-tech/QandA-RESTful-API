import 'dotenv/config';
import cors from 'cors';

import express from 'express';
import connectDB from './models/schemas/mongodbconfig.js';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
// import itemRoutes from './Routes/item.js';
// import userRoutes from './Routes/user.js';

//db connection
connectDB();   

//server
const port = process.env.PORT||4001;
const server = express();


//middleware
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended:true}));

// //USE ROUTES
// server.use('/', itemRoutes);
// server.use('/', userRoutes);



//run database
mongoose.connection.once('open',()=>{
    console.log(`database is running`);

    //run server
server.listen( port, ()=>{
    console.log(`server is running on http://localhost:${port}`);
});
});