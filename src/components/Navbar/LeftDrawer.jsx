import React, { useEffect, useState } from 'react'
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

export default function LeftDrawer({ show1, setShow }) {

    const [openDrawer, setOpenDrawer] = useState(false)

    const showDrawer = () => {
        if (show1 === 'true') {
            setOpenDrawer(true)
        }
    }

    const closeDraw = () => {
        setOpenDrawer(false)
        setShow(false)
    }

    useEffect(() => {
        showDrawer();
    }, [])

    return (
        <div>

            <Drawer
                anchor={"left"}
                open={openDrawer}
                onClose={() => {
                    setOpenDrawer(false)
                    setShow(false)
                }}
            >

                <h4>ADDA</h4>

                <div className='modal'>
                    <div onClick={closeDraw}><ClearAllIcon /><Link to="category/general">General</Link></div>
                    <div onClick={closeDraw}><BusinessCenterIcon /><Link to="category/business">Business</Link></div>
                    <div onClick={closeDraw}><HealthAndSafetyIcon /><Link to="category/health">Health</Link></div>
                    <div onClick={closeDraw}><FitnessCenterIcon /><Link to="category/sports">Sports</Link></div>
                    <div onClick={closeDraw}><ScienceIcon /><Link to="category/science">Science</Link></div>
                    <div onClick={closeDraw}><DynamicFormIcon /><Link to="category/technology">Technology</Link></div>
                    <div onClick={closeDraw}><AttractionsIcon /><Link to="category/entertainment">Entertainment</Link></div>
                    <div onClick={closeDraw}><AirplayIcon /><Link to="category/anime">Anime</Link></div>
                    <div onClick={closeDraw}><HistoryEduIcon /><Link to="category/education">Education</Link></div>
                    <div onClick={closeDraw}><DiamondIcon /><Link to="category/fashion">Fashion</Link></div>
                    <div onClick={closeDraw}><AttachMoneyIcon /><Link to="category/finance">Finance</Link></div>
                    <div onClick={closeDraw}><SportsEsportsIcon /><Link to="category/gaming">Gaming</Link></div>
                    <div onClick={closeDraw}><EmojiFoodBeverageIcon /><Link to="category/food">Food</Link></div>
                </div>

            </Drawer>
        </div>
    )
}
