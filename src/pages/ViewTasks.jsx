import React, { useEffect, useState } from 'react'
import { getTasks, deleteTask } from '../service/taskAPI'
import TaskCard from '../components/TaskCard'

const ViewTasks = () => {

  const [tasks, setTasks] = useState([])

  const fetchTasks = async () => {
    try {
      const { data } = await getTasks()
      setTasks(data)
    } catch (error) {
      console.error("Error to fetch tasks", error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteTask(id)
      setTasks((prev) => prev.filter((task) => task._id !== id))
    } catch (error) {
      console.error("Error to delete task", error)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])
  return (
    <div className='bg-slate-50 min-h-screen p-8'>
      <h1 className='text-4xl font-bold text-center mb-10'>My Tasks</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} deleteTask={handleDelete} />
        ))}
      </div>
    </div>
  )
}

export default ViewTasks