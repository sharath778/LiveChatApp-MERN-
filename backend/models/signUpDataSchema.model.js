import mongoose from "mongoose";

const signUpUserSchema = new mongoose.Schema({
    "fullName":{
        type:mongoose.Schema.Types.String,
        required:true
    },
    "username":{
        type:mongoose.Schema.Types.String,
        required:true,
        unique:true
    },
    "password":{
        type:mongoose.Schema.Types.String,
        required:true
    },
    "gender":{
        type:mongoose.Schema.Types.String,
        required:true,
        enum:['male', 'female']
    },
    profilePic:{
        type: mongoose.Schema.Types.String,
        default:""
    }

}, {timestamps:true});

export const SignUpUserModel =  mongoose.model("SingUpUserModel", signUpUserSchema);
