import React, { useState } from 'react'
import './Navbar.css'
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [openDrawer, setOpenDrawer] = useState(false)

  const list = () => (
    <>
      <li><Link to="category/general">General</Link></li>
      <li><Link to="category/business">Business</Link></li>
      <li><Link to="category/health">Health</Link></li>
      <li><Link to="category/sports">Sports</Link></li>
      <li><Link to="category/science">Science</Link></li>
      <li><Link to="category/technology">Technology</Link></li>
      <li><Link to="category/entertainment">Entertainment</Link></li>
    </>
  )
  return (
    <div className='navbar'>

      <div className='nav'>
        <h1>NEWSADDA</h1>

        <div>
          <ul>
            {list()}
          </ul>
        </div>
      </div>

      <IconButton onClick={() => { setOpenDrawer(true) }}>< MenuIcon /></IconButton>

      <Drawer
        anchor={"left"}
        open={openDrawer}
        onClose={() => { setOpenDrawer(false) }}
      >
        {list()}
      </Drawer>
    </div>
  )
}
