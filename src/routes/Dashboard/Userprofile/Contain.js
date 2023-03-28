import React from 'react'
import "./Contain.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { CenterFocusStrong } from '@mui/icons-material';
import { color } from '@mui/system';
import { Graph } from './Graph';





export default function Contain() {
  return (
    <>
    <div className="Contain">

        <div className="stat">    
        <b>Activity History</b>  
    
    <div className="graph">
    <Graph/>
    <div className="activity" ><b>your activity for last five days = 12 .34 hours</b></div>
    </div>

        </div>

        <div className="profile">
              <b>Admin profile</b>
              <div className="ProfilePic">
                <img src="./all-image/pic1.jpg" alt="" className="ProfilePic" />
              </div>

              <div className="form">
                <form>

                    <div style={{ display: 'flex'}}>
                    <div style={{ flex: 1 }}>
      
      
                    <div className="labels">
                      <div className="gaps">
                      <label>user name</label>
                      </div>
                           
                         
                          
                      <div className="gaps">   
                      <label>address</label>
                      </div> 

                      <div className="gaps">   
                           <label>phone number</label>
                           </div>     

                           <div className="gaps">  
                           <label>e-mail address</label>
                           </div> 
                          
                           <div className="gaps">  
                           <label>admin level</label>
                           </div>    
                     </div>

      
                      {/* content for left section */}
                    </div>


                    <div style={{ flex: 2,textAlign:'start'}}>


                    <div className="inputs">
                                      <div className="column">
                                      <input type="text"  placeholder='ravindu kavinda' />
                                      </div>
                                    
                                    
                                     <div className="column">
                                     <input type="text" placeholder='no 2/1, kandambi road , matara' /> 
                                     </div>
                                     
                                      
                                      <div className="column">
                                      <input type="text" placeholder='0713456234' />
                                      </div>
                                    
                                     
                                    

                                      <div className="column">
                                      <input type="text" placeholder='ravindu@gmail.com' />
                                      </div>
                                    
                                      
                                      <div className="column">
                                      <input type="text" placeholder='super admin' />
                                      </div>
                                    
                                     
                                    
                                  </div>
                              {/* content for right section */}
                            </div>
                          </div>

                </form>
              
            </div>
          
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <div className="div">
                    <Button variant="contained" 
                    color='secondary'
                    disableElevation
                    style={{backgroundColor:'#e4cae4',color:'black',width:
                    '130px',height:'30px',textSizeAdjust:'10px',display:'flex',flex:'1', 
                    textAlign:'center',fontSize:'11px',fontWeight:'bolder',marginTop:'40px',marginLeft:'60px',fontcolor:'black'}} >Edit profile
                    
                    </Button>
                    </div>

                    <div className="div">
                    <Button variant="contained" 
                    color='secondary'
                    disableElevation
                    style={{backgroundColor:'#e4cae4',color:'black',width:
                    '130px',height:'30px',textSizeAdjust:'10px',display:'flex',flex:'3', 
                    textAlign:'center',fontSize:'11px',fontWeight:'bolder',marginTop:'40px',marginRight:'50px'}} >Save changes
                    
                    </Button>
                    </div>
                </div>

           </div>

          
      </div> 
           
      
    </>
  )
}
