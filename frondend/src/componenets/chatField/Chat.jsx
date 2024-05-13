import React, { useEffect } from 'react'
import MessageChatArea from './MessageChatArea.jsx';
import MessageInput from './MessageInput.jsx';
import useConversation from '../../store/useConversation.js';
import { useAuthUser } from '../../context/UserAuth.jsx';

const Chat = () => {
const {selectedConversation, setSelectedConversation} = useConversation();

//for removing if we logOut we need to unmount
useEffect(()=>{
    return ()=> setSelectedConversation(null);
},[setSelectedConversation]);

  return (

      <div  className="flex flex-col w-[40vw] sm:h-[450px] md:h-[550px] border-l-2 border-purple-50 border-opacity-20">
        {!selectedConversation ? (<NoChatSelected/>):    
            (<>
                <div className="w-full bg-gray-500 h-14 pt-4 pl-3 text-purple-100">
                    <span className='text-black'>To: </span> 
                    <span> {selectedConversation.fullName}</span>
                </div>
                
                <MessageChatArea/>
                <MessageInput/>
            </>
        )}       
      </div>
  )
};

export default Chat;

const NoChatSelected = ()=>{
    const {authUser} = useAuthUser();
    return (
        <div className='w-full h-full flex justify-center items-center font-semibold text-lg'>
            <div>
                <p>Welcome 👋 <span className="text-purple-400">{authUser.fullName}</span> 🙏</p>
                <p>Select a chat to start messaging</p>
            </div>
            
        </div>
    );
};