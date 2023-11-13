import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex flex-row justify-center items-center h-screen'>
            <div className=''>
                <Link to="/login" className='px-5 py-2 w-[300px] border-2 border-teal-500 text-teal-500 hover:text-white hover:bg-teal-500'>Managing Mode</Link>
                <Link to="/creator/index" className='px-5 py-2 w-[300px] border-2 border-teal-500 text-teal-500 hover:text-white hover:bg-teal-500'>Creator Mode</Link>
            </div>
        </div>
    )
}

export default Home