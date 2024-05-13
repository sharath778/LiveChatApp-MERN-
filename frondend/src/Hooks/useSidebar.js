import { useEffect, useState } from 'react'
import toast from "react-hot-toast";
const useSidebar = () => {
    const [loading, setLoading] = useState(false);
    const [userList, setUserList] = useState([]);
    
    useEffect(()=>{
        const getConversations= async ()=>{   
            setLoading(true);
            try{
                const res = await fetch("/api/users");
                const data = await res.json();
                if(data.error)throw new Error(data.error);
                setUserList(data);
            
            }catch(err){
                toast.error(err.message);
            }finally{
                setLoading(false);
            }
        };
        getConversations();
    },[]);
    return { loading, userList};
};

export default useSidebar;