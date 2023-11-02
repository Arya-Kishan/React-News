import React, { Suspense, lazy, useState } from 'react'
import './Navbar.scss'
import { Link, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
const LeftDrawer = lazy(() => (import('./LeftDrawer')))

export default function Navbar() {

  const [show, setShow] = useState(false)


  const navigate = useNavigate()

  const handleShow = () => {
    console.log("clicked")
    setShow(true)
  }

  return (
    <div className='navbar'>

      <div className='nav'>
        <h1 onClick={() => { navigate("/") }}>NEWSADDA</h1>

        <div>
          <ul>
            <li><Link to="category/general">General</Link></li>
            <li><Link to="category/business">Business</Link></li>
            <li><Link to="category/health">Health</Link></li>
            <li><Link to="category/sports">Sports</Link></li>
            <li><Link to="category/science">Science</Link></li>
            <li><Link to="category/technology">Technology</Link></li>
            <li><Link to="category/entertainment">Entertainment</Link></li>
          </ul>
        </div>
      </div>

      <Suspense fallback={<h1></h1>} >
        {show && <LeftDrawer show1={'true'} setShow={setShow} />}
      </Suspense>

      <MenuIcon onClick={handleShow} />

    </div>
  )
}
