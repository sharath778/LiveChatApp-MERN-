import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthUser } from "../context/UserAuth.jsx";
const useSignUp = ()=>{

    const {setAuthUser} = useAuthUser();
    
    const [loading, setLoading] = useState(false);
    const signup = async({fullName, username, password, confirmPassword, gender})=>{
        const success = handleInputErrors({fullName, username, password, confirmPassword, gender});
        if(!success) return;
        setLoading(true);
        try{
            const res = await fetch("/api/auth/signup",{
                method: "POST",
                headers: {"content-Type": "application/json"},
                body: JSON.stringify({fullName, username, password, confirmPassword, gender})
            });
            const data = await res.json();
            if(data.error) throw new Error(data.error); 
            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);

        }catch(err){
            toast.error(err.message);
        }finally{
            setLoading(false);
        }
    };
    return {loading, signup};

};

function handleInputErrors({fullName, username, password, confirmPassword, gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("Please fill all the fields!");
        return false;
    }
    if(fullName<3){
        toast.error("Too Short Full Name!");
        return false;
    }
    if(username<5){
        toast.error("Username should be more than 5-characters!");
        return false;
    }
    if(password.length <6){
        toast.error("Password length atleast 6-characters!")
        return false;
    }
    if(password !== confirmPassword ){
        toast.error("Passwords didn't match!");
        return false;
    }

    toast.success("Detailes are valid")
    return true;
};

export default useSignUp;