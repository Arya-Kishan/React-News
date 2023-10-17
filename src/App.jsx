import { Suspense, lazy, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import './App.css'

const Homepage = lazy(() => import('./Pages/HomePage/Homepage'))
const Category = lazy(() => import('./Pages/Category/Category'))
const Detail = lazy(() => import('./Pages/DetailPage/Detail'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div className='first'>News</div>}>
          <Routes>
            <Route path='/' Component={Homepage} />
            <Route path='/category/:endpoint' Component={Category} />
            <Route path='/detail' Component={Detail} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
