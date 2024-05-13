import React from 'react';
import { CiLogout} from "react-icons/ci";
import useLogout from '../../Hooks/useLogout.js';
const LogOutIcon = () => {
  const {logOut} = useLogout();
  return (
        <button onClick={logOut} className='text-3xl mx-3 mb-2'>
            <CiLogout/>
        </button>
  )
}

export default LogOutIcon;