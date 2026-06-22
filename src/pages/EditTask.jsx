import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getTaskById, updateTask } from '../service/taskAPI'

const EditTask = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "Pending",
  })

    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const fetchTasks = async() => {
        try {
          const { data } = await getTaskById(id)

          setTask({
            title: data.title || "",
            description: data.description || "",
            status: data.status || "Pending",
          })
        } catch (error) {
          console.error("Error feching Tasks", error)
        }finally{
          setLoading(false)
        }
      }
      fetchTasks()
    },[id])

    const updateHandler = async (e) => {
      e.preventDefault()

      try {
        await updateTask(id, task)
        navigate("/tasks")
      } catch (error) {
        console.error("Error updating task", error)
      }
    }
    if (loading) {
      return(
        <p className='text-center mt-10 text-lg'>
          Loading Task...
        </p>
      )
    }
  return (
    <div className='flex justify-center py-10'>
      <form 
      onSubmit={updateHandler}
      className='w-full max-w-xl bg-white p-8 rounded-3xl shadow-xl'>
        <h2 className='text-3xl font-bold mb-6 text-center'>Update Task</h2>
        <input
        value={task.title}
        className='w-full p-4 border rounded mb-2'
        onChange={(e) => setTask({ ...task, title: e.target.value})} />

        <textarea rows="5"
        value={task.description}
        className='w-full p-4 border rounded outline-none mb-2'
        onChange={(e) => setTask({ ...task, description: e.target.value})} />

        <select
        value={task.status}
        className='w-full p-4 border rounded mb-6'
        onChange={(e) => setTask({ ...task, status: e.target.value})}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <button
        className='w-full bg-green-600 text-white py-4 rounded-xl hover:bg-green-700'>
          Update Task
        </button>
      </form>
    </div>
  )
}

export default EditTask