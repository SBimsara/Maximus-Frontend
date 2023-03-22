import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
 
import "./Navbar1.css"

export default function Navbar1() {
  return (
        <div className="NavBarBox">
            <div className="NavBarleft">
                <span className="logo">Quizz app</span>
            </div>
            <div className="NavBarcenter">
                <div className="searchBox">
                <SearchIcon className="searchIcon" />
                <input placeholder='search Admin' className="searchInput" />
                </div>
                
            </div>
            <div className="NavBArRight">
                <div className="navbarLinks">
                    <span className='navbarlink'>ravindu</span>
                    <span className='navbarlink'>kavinda</span>
                </div>
                <div className="navbarIcons">
                    <div className="navbarIcon">
                        <PersonIcon/ >
                        <span className='IconTag'>3</span>
                    </div>
                    <div className="navbarIcon">
                        <MessageIcon/ >
                        <span className='IconTag'>4</span>
                    </div>
                    <div className="navbarIcon">
                        <SettingsIcon/ >
                        <span className='IconTag'>5</span>
                    </div>
                </div>
                <img src="../assets/images/pic1.jpg" alt="" className="ProfilepicImage" />
                
            </div>

  </div>  
  )
}
