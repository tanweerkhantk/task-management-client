import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='min-h-[80vh] flex items-center justify-center bg-linear-to-br from-indigo-50 to purple-100'>
      <div className='text-center max-w-3xl'>
        <h1 className='text-6xl font-extrabold text-gray-80 mb-6'>Manage Tasks</h1>
        <p className='text-lg text-gray-600 mb-8'>
          Organize, track and complete your daily tasks with a beautiful task management system
        </p>
        <Link to="/tasks" className='bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl
        text-lg shadow-lg'>View Tasks</Link>
      </div>
    </div>
  )
}

export default Home