import { ConversationModel } from "../models/conversation.model.js";
import { MessageModel } from "../models/message.model.js";
import { getReciverSocketId , io} from "../socket/socket.js";

export const sendMessage = async (req, res)=>{

    try{
        const  reciverId = req.params.id;
        
        const senderId = req.user._id;
        
        const {message} = req.body;
        let findConversation = await ConversationModel.findOne({
            participants: {$all : [senderId, reciverId]}
        });

        if(!findConversation){
            findConversation = await ConversationModel.create({
                participants: [senderId, reciverId]
            });
        }   
        const newMessage = new MessageModel({senderId, reciverId, message }) ;
        
        if(newMessage){
            findConversation.messages.push(newMessage._id);  
        }
        await Promise.all([newMessage.save(), findConversation.save()]);
        
        const reciverSocketId = getReciverSocketId(reciverId);
        
        if(reciverSocketId){
            io.to(reciverSocketId).emit("newMessage", newMessage);
        }
        
        
        res.status(201).json(newMessage); //sending response is important(instance is sent).
    

    }catch(err){
        console.log(`Error in sendMessage controller: ${err.message}`);
        res.status(500).send({error:"Internal server error!"});
    }
};

export const getMessages = async (req, res)=>{
    try{
        const {id: userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await ConversationModel.findOne({
            participants:{$all : [senderId, userToChatId]}
        }).populate("messages");

        if(!conversation)return res.status(200).json([]);
        const messages = conversation.messages;
        return res.status(200).json(messages);
    }catch(err){
        console.error("Error in the getMessage: ", err.message);
        return res.status(401).send(`Internal server error`);
    }
}