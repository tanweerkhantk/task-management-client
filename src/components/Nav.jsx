import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
            <h1 className='text-2xl font-bold text-white'>
                Task Management Application Using MERN Full Stack
            </h1>
            <div className='space-x-6'>
                <Link to="/" className='text-white hover:text-lime-300 transition'>Home</Link>
                <Link to="/tasks" className='text-white hover:text-lime-300 transition'>Tasks</Link>
                <Link to="/add" className='bg-white text-indigo-600 px-4 py-2 rounded-lg
                font-medium hover:bg-gray-100'>Add Task</Link>
            </div>
        </div>
    </nav>
  )
}

export default Nav