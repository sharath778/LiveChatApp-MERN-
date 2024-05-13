import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignUp from '../../Hooks/useSignUp.js';

const SignUp = () => {

     const [inputs, setInputs] = useState({
        fullName:'',
        username:'',
        password:'',
        confirmPassword:'',
        gender:''
     });

     const {loading, signup} = useSignUp();
     
     const handleSubmit= async (e)=>{
        e.preventDefault();
        
        await signup(inputs);//important
     };
     
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className='w-full p-6 shadow-md bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
        <h1 className='text-3xl font-semibold text-center text-white'>
            SignUp
            <span className="text-4xl font-semibold text-blue-500 underline">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>

            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-white'>Full Name:</span>
                </label>
                <input type="text" 
                placeholder='Enter Full Name' 
                className='w-full input input-bordered h-10'
                value={inputs.fullName} onChange={(e)=>setInputs({...inputs, fullName: e.target.value})}></input>
            </div>

            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-white'>Username:</span>
                </label>
                <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'
                value={inputs.username} onChange={(e)=>setInputs({...inputs, username: e.target.value})}></input>
            </div>

            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-white'>Password:</span>
                </label>
                <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10'
                value={inputs.password} onChange={(e)=> setInputs({...inputs, password: e.target.value})}></input>
            </div>

            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-white'>Confirm password:</span>
                </label>
                <input type="password" placeholder='Re-Enter password' className='w-full input input-bordered h-10'
                value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs, confirmPassword: e.target.value})}></input>
            </div>

            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-white'>Gender:</span>
                </label>
                <div className='flex justify-around'>
                    <div>
                        <input type="radio" name='gender' className='ml-2'
                        checked={inputs.gender==='male'} onChange={()=> setInputs({...inputs, gender: 'male'})}/><span className='ml-1'>Male</span>
                    </div>
                    <div>
                        <input type="radio" name='gender' className='ml-2'
                        checked={inputs.gender==='female'} onChange={()=> setInputs({...inputs, gender: 'female'})}/><span className='ml-1'>Female</span>
                    </div>
                </div>
                <Link to='/login' className='text-blue-400 hover:text-blue-500 hover:underline'>I have an account!</Link>
            </div>
            
            <div>
            <button className='btn btn-block btn-sm mt-4'>SignUp</button>
            </div>
        </form>
        </div>
        
    </div>
  )
}

export default SignUp;