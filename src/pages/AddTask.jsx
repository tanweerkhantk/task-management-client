import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createTask } from '../service/taskAPI'

const AddTask = () => {

  const navigate = useNavigate()

  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "Pending",
  })

  const [loading, setLoading] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault()

    if(!task.title.trim()){
      alert("Title is required")
      return
    }
    try {
      setLoading(true)
      await createTask(task)
      navigate("/tasks")
    } catch (error) {
      console.error(error)
      alert("Error to create task")
    }finally{
      setLoading(false)
    }
  }
  return (
    <div className='flex justify-center py-10'>
      <form 
      onSubmit={submitHandler}
      className='w-full max-w-xl bg-white p-8 rounded-3xl shadow-xl'>
        <h2 className='text-3xl font-bold mb-6 text-center'>Create Task</h2>
        <input type="text"
        placeholder='Task Title'
        value={task.title}
        className='w-full p-4 border rounded outline-none mb-2 focus:ring-2 focus:ring-indigo-500'
        onChange={(e) => setTask({ ...task, title: e.target.value})} />

        <textarea rows="5" placeholder="Task Description"
        value={task.description}
        className='w-full p-4 border rounded outline-none mb-2 focus:ring-2 focus:ring-indigo-500'
        onChange={(e) => setTask({ ...task, description: e.target.value})} />

        <select
        value={task.status}
        className='w-full p-4 border rounded mb-6'
        onChange={(e) => setTask({ ...task, status: e.target.value})}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <button disabled={loading}
        className='w-full bg-indigo-600 text-white py-4 rounded-xl hover:bg-indigo-700 disabled:opacity-50'>
          { loading ? "Creating..." : "Create Task"}
        </button>
      </form>
    </div>
  )
}

export default AddTask