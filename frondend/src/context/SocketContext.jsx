import {createContext, useContext, useEffect, useState} from "react";
import io from "socket.io-client";
import {useAuthUser} from "../context/UserAuth.jsx";

const SocketContext = createContext();
export const useSocketContex = ()=>useContext(SocketContext);
export const SocketContextProvider = ({children}) =>{
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const {authUser} = useAuthUser(); 

    useEffect(()=>{
        if(authUser){
            const socket = io("http://localhost:5000", {
                query:{
                    userId: authUser._id
                }
            });
            setSocket(socket);
            socket.on("getOnlineUsers", (users)=>{
                setOnlineUsers(users);
            });
            return ()=>socket.close();
        }else{
            if(socket) {
                socket.close();
                setSocket(null);
            }
        }
    },[authUser]);

    return(
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}
