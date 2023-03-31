import React, { useState } from 'react'
import "./Contain.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { CenterFocusStrong } from '@mui/icons-material';
import { color } from '@mui/system';
import { Graph } from './Graph';





export default function Contain() {

  const [name,setName]=useState('')
  const [address,setAddress]=useState('')
  const [phoneNum,setPhonenum]=useState('')
  const [email,setEmail]=useState('')
  const [level,setLevel]=useState('')

  const handleClick=(e)=>{
    e.preventDefault()
    const Admin={name,address,phoneNum,email,level}
    console.log(Admin)
    
  }

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
                                      <TextField id='standard-basic'
                                      value={name}
                                      onChange={(e)=>setName(e.target.value)} placeholder='ravindu kavinda'
                                      variant='standard'  />
                                      </div>
                                    
                                    

                                     <div className="column">
                                      <TextField id='standard-basic'
                                      value={address}
                                      onChange={(e)=>setName(e.target.value)} placeholder='no 2/1, kandambi road , matara'
                                      variant='standard'  />
                                      </div>
                                     
                                      
                                     
                                      <div className="column">
                                      <TextField id='standard-basic'
                                      value={phoneNum}
                                      onChange={(e)=>setName(e.target.value)} placeholder='0766891378'
                                      variant='standard'  />
                                      </div>
                                     
                                    

                                    
                                      <div className="column">
                                      <TextField id='standard-basic'
                                      value={email}
                                      onChange={(e)=>setName(e.target.value)} placeholder='allravindu@gmail.com'
                                      variant='standard'  />
                                      </div>
                                    
                                      
                                     
                                      <div className="column">
                                      <TextField id='standard-basic'
                                      value={level}
                                      onChange={(e)=>setName(e.target.value)} placeholder='superAdmin'
                                      variant='standard'  />
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
