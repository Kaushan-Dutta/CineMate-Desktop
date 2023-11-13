import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/index.css'

const Navbar = () => {
  return (
    <div className='bg-white min-w-full'>
        <Link to="/creator/index" >Creator Mode</Link>
        <Link to="/managing/index">Manging Mode</Link>
    </div>
  )
}

export default Navbar