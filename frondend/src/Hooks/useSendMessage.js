import { useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../store/useConversation.js";


const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const {messages, setMessages, selectedConversation } = useConversation();
  const sendMessage= async (msg) =>{
    setLoading(true);
    try {
        
        const res = await fetch(`/api/message/send/${selectedConversation._id}`,{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({message :msg})
        });

        //we need to send the message in send(message); at backend!!
        // const text = await res.text();
        // console.log("Response text:", text);
        // const data = JSON.parse(text);

        const data = await res.json(); 
        
        if(data.error)throw new Error(data.error);
        setMessages([...messages, data]);
        // console.log(`From the useSendMessages: ${data}`);
    } catch (error) {
        
        toast.error(error.message);
    }finally{
        setLoading(false);
    }
    
  }
  return {loading, sendMessage};
}

export default useSendMessage;