import mongoose, { model } from "mongoose";

const messageSchema  = new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SignUpUserModel",
        required:true
    },
    reciverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SignUpUserModel",
        required:true
    },
    message:{
        type: mongoose.Schema.Types.String,
        required:true
    }
}, {timestamps:true});

export const MessageModel = mongoose.model("MessageModel", messageSchema);
