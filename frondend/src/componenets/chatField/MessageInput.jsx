import React, {useState} from 'react';
import { IoIosSend } from "react-icons/io";
import useSendMessage from '../../Hooks/useSendMessage.js';
const MessageInput = () => {
  const [msg, setMsg] = useState("");
  const {loading, sendMessage} = useSendMessage();
  
  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(!msg)return;
    await sendMessage(msg);
    setMsg("");
  };
  return (
    <div className=' bg-[#121212]'>
      <form onSubmit={handleSubmit} className="flex justify-center items-center">
        <input 
          type="text" 
          className='w-full input h-12 p-4 rounded-lg' 
          placeholder='Send message'
          value={msg} onChange={(e)=>setMsg(e.target.value)}/>
        <button type="submit" className='btn ml-2 rounded-l-none border-l-white border-l-2'>  
          {loading?<span className='loading loading-spinner'></span>
          :<IoIosSend className=" font-bold text-4xl h-12 "/>}
        </button>  
      </form>
    </div>
  )
}

export default MessageInput;