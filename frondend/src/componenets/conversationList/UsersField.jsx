import React from 'react'
import SearchBlock from './SearchBlock.jsx';
import FriendsList from './FriendsList.jsx';
import LogOutIcon from './LogOutIcon.jsx';

export const UsersField = () => {
  return (
    <div>
      <div className='flex flex-col w-[40vw] sm:h-[450px] md:h-[550px]'> 
        <SearchBlock/>
        <div className='divider px-3'></div> 
        <FriendsList />
        <LogOutIcon/>
      </div>
    </div>
  )
}
export default UsersField;