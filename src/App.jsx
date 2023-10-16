import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Homepage from './Pages/HomePage/Homepage'
import Category from './Pages/Category/Category'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/category/:endpoint' element={<Category/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
