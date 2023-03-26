import React from 'react'
import "./Contain.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Contain() {
  return (
    <>
        <div className="Contain">

            <div className="stat">    
            stat    
            </div>

            <div className="profile">
                 profile
                 <div className="ProfilePic">
                    <img src="./all-image/pic1.jpg" alt="" className="ProfilePic" />
                 </div>

                 <div className="form">
                    <form>
                        <div className="labels">
                           
                            <label>user name</label>
                           

                            
                            <label>address</label>
                           

                           
                            <label>phone number</label>
                            

                          
                            <label>e-mail address</label>
                           

                            
                            <label>admin level</label>
                                
                      </div>

                      <div className="inputs">
                        
                         <input type="text" placeholder='ravindu kavinda' />
                        
                        
                         <input type="text" placeholder='no 2/1, kandambi road , matara' />
                         

                        
                         <input type="text" placeholder='0713456234' />
                       

                         
                         <input type="text" placeholder='ravindu@gmail.com' />
                         

                        
                         <input type="text" placeholder='super admin' />
                        
                      </div>
                    </form>
              
            </div>
            </div>
            </div> 
           
      
    </>
  )
}
