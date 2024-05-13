import jwt from "jsonwebtoken";
import { SignUpUserModel } from "../models/signUpDataSchema.model.js";

const protectRouter= async (req, res, next)=>{
    try{
        const token = req.cookies.jwt;
        if(!token) return res.status(500).send("unautherized use- no token available");
        const decode  = jwt.verify(token, process.env.JWT_SECRET);
        if(!decode) return res.status(500).send("unautherized use- token available");
        const findUser = await SignUpUserModel.findById(decode.userId).select("-password");
        if(!findUser)return res.status(401).send("user Not exist");
        req.user = findUser;
        next();
    }catch(err){
        console.log("Error in the protectRouter is: ",err.message);
        return res.status(201).send(`Internal server error: ${err}`);
    }
};

export default protectRouter;