import React, { createContext, useState, useContext } from 'react';

export const AuthUser = createContext();
export const useAuthUser = () => useContext(AuthUser);

const UserAuth = ({children}) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);
  return <AuthUser.Provider value={{authUser, setAuthUser}}>
        {children}
    </AuthUser.Provider>
  
}

export default UserAuth;