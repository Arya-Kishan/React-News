import React, { useState } from 'react'
import './Navbar.css'
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ScienceIcon from '@mui/icons-material/Science';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import AttractionsIcon from '@mui/icons-material/Attractions';
import AirplayIcon from '@mui/icons-material/Airplay';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import DiamondIcon from '@mui/icons-material/Diamond';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';

export default function Navbar() {

  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <div className='navbar'>

      <div className='nav'>
        <h1>NEWSADDA</h1>

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

      <IconButton onClick={() => { setOpenDrawer(true) }}>< MenuIcon /></IconButton>

      <Drawer
        anchor={"left"}
        open={openDrawer}
        onClose={() => { setOpenDrawer(false) }}
      >

        <h4>ADDA</h4>

        <div className='modal'>
          <div onClick={() => { setOpenDrawer(false) }}><ClearAllIcon /><Link to="category/general">General</Link></div>
          <div onClick={() => { setOpenDrawer(false) }}><BusinessCenterIcon /><Link to="category/business">Business</Link></div>
          <div onClick={() => { setOpenDrawer(false) }}><HealthAndSafetyIcon /><Link to="category/health">Health</Link></div>
          <div onClick={() => { setOpenDrawer(false) }}><FitnessCenterIcon /><Link to="category/sports">Sports</Link></div>
          <div onClick={() => { setOpenDrawer(false) }}><ScienceIcon /><Link to="category/science">Science</Link></div>
          <div onClick={() => { setOpenDrawer(false) }}><DynamicFormIcon /><Link to="category/technology">Technology</Link></div>
          <div onClick={() => { setOpenDrawer(false) }}><AttractionsIcon /><Link to="category/entertainment">Entertainment</Link></div>
          <div onClick={() => { setOpenDrawer(false) }}><AirplayIcon /><Link to="category/anime">Anime</Link></div>
          <div onClick={() => { setOpenDrawer(false) }}><HistoryEduIcon /><Link to="category/education">Education</Link></div>
          <div onClick={() => { setOpenDrawer(false) }}><DiamondIcon /><Link to="category/fashion">Fashion</Link></div>
          <div onClick={() => { setOpenDrawer(false) }}><AttachMoneyIcon /><Link to="category/finance">Finance</Link></div>
          <div onClick={() => { setOpenDrawer(false) }}><SportsEsportsIcon /><Link to="category/gaming">Gaming</Link></div>
          <div onClick={() => { setOpenDrawer(false) }}><EmojiFoodBeverageIcon /><Link to="category/food">Food</Link></div>
        </div>

      </Drawer>
    </div>
  )
}
