import React,{useState} from 'react';
import { FaSearch } from "react-icons/fa";
import useConversation from '../../store/useConversation.js';
import useSidebar from '../../Hooks/useSidebar.js';
import toast from 'react-hot-toast';

const SearchBlock = () => {
  const {userList} = useSidebar();
  const {setSelectedConversation} = useConversation();
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = (e)=>{
    e.preventDefault();
    if(!searchInput) return;
    if(searchInput.length<3){
      toast.error("To search a user Need atleast 3-letters!");
      return;
    }
    const findUser = userList.find((e)=>e.fullName.toLowerCase().includes(searchInput.toLowerCase()));
    if(!findUser){
      toast.error("No such User found!");
    }
    setSelectedConversation(findUser);
    setSearchInput("");
  }
  return (
    
    <form  onSubmit={handleSearchInput} className='flex m-2  justify-between text-white'>
        <input type="text" placeholder='Search...' className='w-full input input-bordered rounded-full mx-4'
        value={searchInput}
        onChange={(e)=>setSearchInput(e.target.value)}
        /> 
        <button type='submit' className='btn btn-circle bg-sky-600 text-xl'><FaSearch/></button>
    </form>
        
  )
}

export default SearchBlock