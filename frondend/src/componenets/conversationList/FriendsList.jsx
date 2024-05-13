import React from 'react'
import Friend from './Friend.jsx'
import useSidebar from '../../Hooks/useSidebar.js'
import { generateEmoji } from '../../util/emojiGeneratoer.js';

const FriendsList = () => {
  const {loading, userList} = useSidebar();
  // console.log(userList);
  return (
    <div className='flex flex-col overflow-auto h-full'>
        {loading? <span className='loading loading-spinner mx-auto'></span>:<></>}
        {
          userList.map((e, idx)=> <Friend
          key={e._id}
          user={e}
          emoji = {generateEmoji()}
          lastIndex = {idx === userList.length-1}/>)
        }

    </div>
  )
}

export default FriendsList