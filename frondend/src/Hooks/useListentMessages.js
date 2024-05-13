import {useEffect} from 'react';
import { useSocketContex } from '../context/SocketContext.jsx';
import useConversation from '../store/useConversation.js';

import notificationSound from "../assets/notification.mp3";

const useListentMessages = () => {
  const {socket} = useSocketContex();
  const {messages, setMessages} = useConversation();
  useEffect(()=>{
    socket?.on("newMessage", (newMessage)=>{
        newMessage.shouldShake = true;
        const notification = new Audio(notificationSound);
        notification.play();
        setMessages([...messages, newMessage]);
    });
    return () => socket?.off("newMessage");
  },[socket, messages, setMessages]);
}
export default useListentMessages;