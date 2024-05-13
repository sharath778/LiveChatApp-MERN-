import React from 'react'
import { useAuthUser } from '../../context/UserAuth.jsx'
import useConversation from '../../store/useConversation.js';
import { extractTime } from '../../util/extractTime.js';

const EachMessage = ({message}) => {
  const {authUser} = useAuthUser();
  const {selectedConversation} = useConversation();
  const fromMe = authUser._id === message.senderId;
  // console.log(`messageSenderId: ${message.senderId}`)
  // console.log(`Autherise Check in EachMessage: ${fromMe}`)
  const chatClassName = fromMe? "chat-end" : "chat-start";
  const bubbleBg = fromMe? "bg-blue-400" :"";
  const profilePic = fromMe? authUser.profilePic : selectedConversation?.profilePic;
  const getTime = extractTime(message.createdAt);
  const shakeClass = message.shouldShake? "shake":"";

  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar opa'>
            <div className='w-10 rounded-full'>
            <img alt="Tailwind CSS chat bubble component" 
            src={profilePic} />
            </div>
        </div>
        
        
        <time className='chat-footer *:text-xs opacity-50'>{getTime}</time>
                <div className={`chat-bubble ${bubbleBg} ${shakeClass} text-white`}>{message.message}</div>
    </div>
  )
}

export default EachMessage