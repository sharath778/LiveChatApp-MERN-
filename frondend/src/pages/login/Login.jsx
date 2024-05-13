import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../Hooks/useLogin.js';


const Login = () => {
    const {login} = useLogin();
  const [inputs, setInputs] = useState({
    username:"",
    password:""
  });
  const submitLogin = async (e)=>{
    e.preventDefault();
    await login(inputs);
  }


  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className='w-full p-6 shadow-md bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
        <h1 className='text-3xl font-semibold text-center text-white'>
            Login
            <span className="text-4xl font-semibold text-blue-500 underline">ChatApp</span>
        </h1>
        <form onSubmit={submitLogin}>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-white'>Username:</span>
                </label>
                <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'
                value={inputs.username} onChange={(e)=>setInputs({...inputs, username: e.target.value})}/>
            </div>

            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-white'>Password:</span>
                </label>
                <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10'
                value={inputs.password} onChange={(e)=>setInputs({...inputs, password : e.target.value})}/>
                <Link to="/signup" href="#" className='text-sm hover:underline hover:text-blue-500 my-2 inline-block'>Don't have an account?</Link>
            </div>
            
            <div>
            <button  className='btn btn-block btn-sm '>Login</button>
            </div>
        </form>
        

        
        </div>
        
    </div>
  )
}

export default Login