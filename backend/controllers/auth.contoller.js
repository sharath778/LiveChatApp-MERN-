import { SignUpUserModel } from "../models/signUpDataSchema.model.js";
import bcryptjs from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const login = async (req, res)=>{
    try{
        const {username, password} = req.body;
        const findUserName = await SignUpUserModel.findOne({username});
        
        if(!findUserName || !bcryptjs.compareSync(password,findUserName.password)) 
            return res.status(400).json({error:"invalid Credantials!!"});
        
        generateTokenAndSetCookie(findUserName._id, res);
        return res.status(201).json(findUserName);
        
    }catch(err){
        return res.status(404).send(`${err}`);

    }
    
};

export const logout = (req, res)=>{
    try{
        res.cookie("jwt", "" , {maxAge:0});
        res.status(201).send("LoggedOut successfully!");
    }catch(err){
        console.log("Internal server Error", err.message)
        res.status(404).send(`${err}`);
    }
    
};

export const signUp =async (req, res)=>{
    try{
        const {fullName, username, password, confirmPassword, gender} = req.body;
        
        if(password !== confirmPassword)
            return res.status(401).send({"msg":"confirm password is incorrect!!"});
        
        const userNameCheck = await SignUpUserModel.findOne({username});
        if(userNameCheck)
            return res.status(401).send({"msg":"Username you entered is already exists!!"});
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        
        const maleProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const femaleProfiel=`https://avatar.iran.liara.run/public/girl?username=${username}`;
        
        const newUser =
         new SignUpUserModel({
            fullName, 
            username, 
            password: hashedPassword, 
            gender,
            profilePic: gender==="male"?maleProfile:femaleProfiel
        });
        if(newUser){
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
            return res.status(200).send(newUser);
        }else{
            return res.status(401).json({error:"Invalid user details!"});
        }
    }catch(err){
            console.log(`Error : ${err.message}`);
            res.status(404).send(`Internal server error! Error: ${err}`);
    }

    
};