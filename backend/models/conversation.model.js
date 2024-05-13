import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"SignUpUserModel"
            
        }
    ],
    messages:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"MessageModel",
            default:[]
        }
    ]
},{timestamps:true});

export const ConversationModel = mongoose.model("ConversationModel", conversationSchema);