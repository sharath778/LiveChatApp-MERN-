import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthUser } from "../context/UserAuth";


const useLogin = ()=>{
    const {setAuthUser} = useAuthUser()
    const [loading, setLoading] = useState(false);
    const login = async ({username, password})=>{
        const success = handleError({username, password});
        if(!success){
            return;
        }
        setLoading(true);
        try {
            const res = await fetch("/api/auth/login",{
                method:"POST",
                headers: {"content-Type": "application/json"},
                body: JSON.stringify({username, password})
            });
            const data = await res.json();
            if(data.error)throw new Error(data.error);
            localStorage.setItem("chat-user",JSON.stringify(data));
            setAuthUser(data)
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }
    return {login};
};

function handleError({username, password}){
    if(!username || !password){
        toast.error("Input fields can't be empty!");
        return false;
    }
    return true;
}

export default useLogin;