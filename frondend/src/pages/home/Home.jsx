import React from 'react'
import UsersField from '../../componenets/conversationList/UsersField.jsx';
import Chat from '../../componenets/chatField/Chat.jsx';


const Home = () => {
  return (
    <div className='flex   w-[80vw]  xss:h-[300px] xs:h-[400px] sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden 
    bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <UsersField/>
        <Chat/>
    </div>
  )
}

export default Home;