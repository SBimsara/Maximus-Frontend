import React, { useEffect, useState } from 'react'
import "./Contain.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Graph } from './Graph';
import {getDataById} from '../../../services/getDataById';
import { updateData } from '../../../services/updateData';

import "antd/dist/antd"
import {  message } from 'antd';

 const getURL = "http://localhost:8082/api/v1/admin/getAdminByAdminId/"
 const id = "1";

export default function Contain() {

  const [name,setName]=useState('')
  const [address,setAddress]=useState('')
  const [mobilenum,setPhonenum]=useState('')
  const [email,setEmail]=useState('')
  const [age,setAge]=useState('')
  //const [age,setAge]=useState('')
 
 

  const [isDisabled, setisDisabled] = useState(true);
 
 
 

  const handleClick = () =>{
    setTimeout(() =>{
      message.warning("edit admin profile")
     },1000); 

    setisDisabled(false);

  }

useEffect(()=>{
  loadUsers();
},[]);



async function loadUsers() {
  const result = await getDataById(getURL,id);
  console.log(result)
  setName(result.name);
  setAddress(result.address);
  setEmail(result.email);
  setPhonenum(result.mobilenum);
  setAge(result.age);
  // setAge(result.content.age);

}



const handleSubmit = async () => {

  setTimeout(() =>{
   message.success("admin profile edited")
  },1000); 
  
  setisDisabled(true);

  const data = {
    "id":id,
    "name": name,
    "address": address,
    "mobilenum": mobilenum,
    "email": email,
    "age": age,
    // "age":age
  };
  const result = await updateData("http://localhost:8082/api/v1/admin/updateAdmin",data);
  console.log(result);
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
                <img src="./all-image/admins.png" alt="" className="ProfilePic" />
              </div>

              <div className="form">  
                <form>

                    <div style={{ display: 'flex'}}>
                    <div style={{ flex: 1 }}>
      
      
                    <div className="labels">
                      <div className="gaps">
                      <label>Admin name</label>
                      </div>
                           
                         
                          
                      <div className="gaps">   
                      <label>Home Town</label>
                      </div> 

                      <div className="gaps">   
                           <label>phone number</label>
                           </div>     

                           <div className="gaps">  
                           <label>e-mail address</label>
                           </div> 
                          
                           <div className="gaps">  
                           <label>age</label>
                           </div>   

                         

                            
                     </div>

      
                    
                    </div>


                    <div style={{ flex: 2,textAlign:'start'}}>


                    <div className="inputs">
                 
                        
                                      <div className="column">
                                      <TextField id='standard-basic'
                                      value={name}
                                      disabled = {isDisabled}
                                      onChange={(e)=>setName(e.target.value)}
                                      variant='standard'  />
                                      </div>
                             
                                

                                     <div className="column">
                                      <TextField id='standard-basic'                                                                      
                                      value={address}
                                      disabled = {isDisabled}
                                      onChange={(e)=>setAddress(e.target.value)}
                                      variant='standard'  />
                                      </div>
                                     
                                      
                                     
                                      <div className="column">
                                      <TextField id='standard-basic'
                                     value={mobilenum}
                                     disabled = {isDisabled}
                                     onChange={(e)=>setPhonenum(e.target.value)}
                                     variant='standard'  />
                                      </div>
                                     
                                    

                                    
                                      <div className="column">
                                      <TextField id='standard-basic'
                                      value={email}
                                      disabled = {isDisabled}
                                      onChange={(e)=>setEmail(e.target.value)}
                                      variant='standard'  />
                                     
                                      </div>
                                    
                                      
                                     
                                      <div className="column">
                                      <TextField id='standard-basic'
                                     value={age}
                                     disabled = {isDisabled}
                                     onChange={(e)=>setAge(e.target.value)}
                                     variant='standard'  />

                                      {/* <div className="column">
                                      <TextField id='standard-basic'
                                    //  value={age}
                                     disabled = {isDisabled}
                                     onChange={(e)=>setLevel(e.target.value)}
                                     variant='standard'  />
                                     
                                      </div> */}

                                      
                                 
                                    
                                     </div>
                                    
                                  </div>
                           
                            </div>
                          </div>

                </form>
              
            </div>
          
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <div className="div">
                    <Button variant="contained" 
                    color='secondary'
                    disableElevation
                    onClick={handleClick}
                    style={{backgroundColor:'#e4cae4',color:'black',width:
                    '130px',height:'30px',textSizeAdjust:'10px',display:'flex',flex:'1', 
                    textAlign:'center',fontSize:'11px',fontWeight:'bolder',marginTop:'40px',marginLeft:'60px',fontcolor:'black'}}
                    >
                      Edit profile
                    
                    </Button>
                    </div>

                    <div className="div">
                  
                    <Button variant="contained" 
                    color='secondary'
                    disableElevation
                  
                    style={{backgroundColor:'#e4cae4',color:'black',width:
                    '130px',height:'30px',textSizeAdjust:'10px',display:'flex',flex:'3', 
                    textAlign:'center',fontSize:'11px',fontWeight:'bolder',marginTop:'40px',marginRight:'50px'}} 
                   
                    onClick={handleSubmit} 
                     
                   
                    >Save changes
                    
                        
                    
                    </Button>
                   
                    </div>
                   
                </div>

           </div>

          
      </div> 
           
      
    </>
  )
}
