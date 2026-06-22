import React from 'react'
import { Link } from 'react-router-dom'

 const statusColors = {
    Pending: "bg-red-500",
    "In Progress": "bg-blue-500",
    Completed: "bg-green-500"
  }
const TaskCard = ({ task, deleteTask }) => {

 
  return (
    <div className='bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-all duration-300'>
      <h2 className='text-xl font-bold text-gray-800'>
        {task.title}
      </h2>
      <p className='text-gray-600 mt-3'>
        {task.description}
      </p>
      <span className={`inline-block px-4 py-2 mt-4 text-white rounded-full ${statusColors[task.status]}`}>
        {task.status}
      </span>

      <div className='flex gap-3 mt-6'>
        <Link to={`/edit/${task._id}`}
        className='flex-1 text-center bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg cursor-pointer'>
          Edit
        </Link>
        <button onClick={() => deleteTask(task._id)}
          className='flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg cursor-pointer'>
            Delete
          </button>
      </div>
    </div>
  )
}

export default TaskCard