import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import ViewTasks from './pages/ViewTasks'
import AddTask from './pages/AddTask'
import EditTask from './pages/EditTask'

function App() {


  return (
   <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/tasks' element={<ViewTasks />}/>
      <Route path='/add' element={<AddTask />}/>
      <Route path='/edit/:id' element={<EditTask />}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
