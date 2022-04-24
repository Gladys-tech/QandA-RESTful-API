import jwt from "jsonwebtoken";
import router from "../Routes/user.js";

export default function (req, res, next){
    const token = req.header("Authorization");
    if(!token){
        return res.status(401).send(`access denied no token provided`);
    }
    try{
        const decorded = jwt.verify(token, "privatekey");
        req.user = decorded;
        next();

    }catch(error){
        res.status(400).send(`invalid token`);
    }
};
