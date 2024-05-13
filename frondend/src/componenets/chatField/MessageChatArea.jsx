import React, { useEffect, useRef } from 'react';
import EachMessage from './EachMessage.jsx';
import useGetMessages from '../../Hooks/useGetMessages.js';
import MessageSkeleton from '../../skeletons/MessageSkeleton.jsx';
import useListentMessages from '../../Hooks/useListentMessages.js';

const MessageChatArea = () => {
  const {loading, messages} = useGetMessages();
  useListentMessages();
  //for the scroll Automatic.
  const lastMessageRef = useRef();
  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behaviour: "smooth"});
    },100);
  },[messages]);
  
  
  return (
    <div className='flex-1 px-4 overflow-auto relative'>
      {!loading && messages.length > 0 && messages.map((msg)=>(
        <div key={msg._id} ref={lastMessageRef}>
          <EachMessage  message={msg}/>
        </div>
      ))} 
      {loading && [...Array(3)].map((_, idx)=><><MessageSkeleton key={idx}/><br/><br/><br/></>) }
      {!loading && messages.length === 0 && (
        <p className="text-center text-white">Send Message to start the conversation!</p>
      )}
     
    </div>
  )
}

export default MessageChatArea;