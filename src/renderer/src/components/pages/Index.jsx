import React,{useEffect} from 'react'

const Index = () => {
 
  return (
    <div className='flex flex-row justify-center items-center h-screen'>
        <div className='text-center'>
            <p className='text-white text-4xl font-serif'>Welcome to the <span className='text-teal-500'>{window.location.pathname.includes('/creator')?'Creator Mode':'Managing Mode'}</span> of Cine Mate</p>
        </div>
    </div>
  )
}

export default Index