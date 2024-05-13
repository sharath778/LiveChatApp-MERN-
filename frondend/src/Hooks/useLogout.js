import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthUser } from "../context/UserAuth.jsx";

const useLogout = ()=>{
    const {setAuthUser} = useAuthUser();
    const [loading, setLoading] = useState(false);
    const logOut = async ()=>{
        setLoading(true);
        try {
            const res = await fetch("/api/auth/logout",{
                method: "POST",
                headers: {"content-Type": "application/json"}
            });
            localStorage.removeItem("chat-user");
            setAuthUser(null);
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }
    return {loading, logOut};

}

export default useLogout;