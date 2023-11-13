import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-row justify-center items-center h-screen'>
    <div className='border-2 border-teal-500 p-5 rounded-md '>
        <p className='text-white text-xl font-sans text-center '>Login  to Managing mode</p>
        <form className='flex flex-col text-white '>
            <label>Email:</label>
            <input type="email" name="email" className='border-2 border-teal-500 w-full p-2 my-2 bg-transparent outline-none'/>
            <label>Password:</label>
            <input type="password" name="password"className='border-2 border-teal-500 w-full p-2 my-2 bg-transparent outline-none' />
            <Link to="/managing/index" className='px-5 py-2 w-[80px] bg-teal-500 rounded-md hover:rounded-lg'>Login</Link>
        </form>
        <p className='text-white'>To access the email and password you must create account in official cine mate page</p>
    </div>
    </div>
  )
}

export default Login