import React from 'react';
import useConversation from '../../store/useConversation.js';
import { useSocketContex } from '../../context/SocketContext.jsx';

const Friend = ({user, lastIndex, emoji}) => {
    const {selectedConversation , setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === user._id;
    const {onlineUsers} = useSocketContex();
    const isOnline = onlineUsers.includes(user._id);

  return (
    <>
    <div className={`flex justify-between hover:bg-purple-400 hover:text-white hover:cursor-pointer 
     ${isSelected? "bg-purple-400":""}`} onClick={()=>setSelectedConversation(user)}>
        <div className='flex gap-3 items-center'>
            <div className='flex'>
                <div className={`avatar ${isOnline ? "online" : ""} mx-3 my-2`}>
                    <div className="w-16 rounded-full">
                        <img src={user.profilePic} />
                    </div>
                </div>
            </div>
            <div>{user.fullName}</div>
        </div>
        <div className='pr-5 self-center text-2xl'>{emoji}</div>
    </div>
    {!lastIndex?<div className='divider px-3 my-0'></div>:<></>}

    </>
  )
}

export default Friend;