import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';

 
import "./Navbar1.css"

export default function Navbar1() {
  return (
    <>
        <div className="NavBarBox">
                <div className="NavBarleft">
                    <span className="logo">Quizz app</span>
                </div>

              

                <div className="NavBArRight">
                        <span className='navbarlinks'>ravindu kavinda</span>    
                 </div>
                    

          </div>  
       </>
  )
}
