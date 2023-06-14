import React, { useEffect, useState } from 'react'
import "./Contain.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Graph } from './Graph';
import { stat0 } from '../../Statistics/Stat0/Stat0'
import {getDataById} from '../../../services/getDataById';
import { updateData } from '../../../services/updateData';

import "antd/dist/antd"
import {  message } from 'antd';
import Stat1 from '../../Statistics/Stat1/Stat1';

 const getURL = "http://localhost:8080/api/v1/admin/getAdminByAdminId/"
 const id = "1";

export default function Contain() {
  
  const [firstName,setfName]=useState('')
  const [lastName,setlName]=useState('')
  const [contactNumber,setPhonenum]=useState('')
  const [email,setEmail]=useState('')
  const [gender,setGender]=useState('')
  const[dateOfBirth,setDate]=useState('')
  const[nic,setNIC]=useState('')
  const[username,setUser]=useState('')
  const[password,setPassword]=useState('')
  const[isMainAdmin,setMain]=useState('')

  // const [nic,setID]=useState('')
  //const [age,setAge]=useState('')
 
 

  const [isDisabled, setisDisabled] = useState(true);
 
 

  
const [firstNameError, setFirstNameError] = useState(false);
const [lastNameError, setLastNameError] = useState(false);
const [contactNumberError, setContactNumberError] = useState(false);
const [emailError, setEmailError] = useState(false);
// const [nicError, setNICError] = useState(false);

const [firstNameErrorHelperText ,setFirstNameErrorHelperText] = useState("")
const [lastNameErrorHelperText ,setLastNameErrorHelperText] = useState("")


const validateFirstName = () => {
  const alphabetic = /^[A-Za-z]+$/;

  if (firstName.trim() === '') {
    setFirstNameError(true);
    message.error("First name is required");
    return false;
  } else if (firstName.length < 2 || firstName.length > 50) {
    setFirstNameError(true);
    message.error("First name must be between 2 and 50 characters");
    return false;
  } else if (!alphabetic.test(firstName)) {
    setFirstNameError(true);
    message.error("First name should contain only alphabetic letters");
    return false;
  } else {
    setFirstNameError(false);
    return true;
  }
};


const validateLastName = () => {
  const alphabetic = /^[A-Za-z]+$/;

  if (lastName.trim() === '') {
    setLastNameError(true);
    message.error("Last name is required");
    return false;
  } else if (lastName.length < 2 || lastName.length > 50) {
    setLastNameError(true);
    message.error("Last name must be between 2 and 50 characters");
    return false;
  } else if (!alphabetic.test(lastName)) {
    setLastNameError(true);
    message.error("Last name should contain only alphabetic letters");
    return false;
  } else {
    setLastNameError(false);
    return true;
  }
};


const validateContactNumber = () => {
  const phoneNumber = /^\d{10}$/;

  if (contactNumber === '') {
    setContactNumberError(true);
    message.error("Phone number is required");
    return false;
  } else if (!phoneNumber.test(contactNumber)) {
    setContactNumberError(true);
    message.error("Please enter a valid phone number");
    return false;
  } else {
    setContactNumberError(false);
    return true;
  }
};


// const validateNIC = () => {
//   const nicFormat = /^[0-9]{9}[vVxX]$/;
//   const nicLength = /^\d{9}[Vv]|\d{12}$/;

//   if (nic === '') {
//     setNICError(true);
//     message.error("NIC is required");
//     return false;
//   } else if (!nicFormat.test(nic)) {
//     setNICError(true);
//     message.error("NIC format is invalid");
//     return false;
//   } else if (!nicLength.test(nic)) {
//     setNICError(true);
//     message.error("NIC should contain 9 digits and a 'v' or 'V' or 12 digits");
//     return false;
//   } else {
//     setNICError(false);
//     return true;
//   }
// };


const validateEmail = () => {
  const valemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === '') {
    setEmailError(true);
    message.error("Email is required");
    return false;
  } else if (!valemail.test(email)) {
    setEmailError(true);
    message.error("Please enter a valid email address");
    return false;
  } else {
    setEmailError(false);
    return true;
  }
};


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
  setfName(result.firstName);
  setlName(result.lastName);
  setEmail(result.email);
  setPhonenum(result.contactNumber);
  setGender(result.gender);
  setDate(result.dateOfBirth);
  setNIC(result.nic);
  setUser(result.username);
  setPassword(result.password);
  setMain(result.isMainAdmin);

  // setID(result.nic);
  // setAge(result.content.age);

}



const handleSubmit = async () => {
  const a = validateFirstName();
  const b = validateLastName();
  const c = validateContactNumber();
  const d = validateEmail();
  // const e = validateNIC();

  if (a&&b&&c&&d) {
    
    setTimeout(() => {
      message.success('admin profile edited');
    }, 1000);

    setisDisabled(true);

    const data = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      contactNumber: contactNumber,
      email: email,
      gender:gender,
      dateOfBirth:dateOfBirth,
      nic:nic,
      username:username,
      password:password,
      isMainAdmin:isMainAdmin,


      // nic: nic,
    };
    try{
    const result = await updateData('http://localhost:8080/api/v1/admin/updateAdmin',data);
    console.log(result);
    } 
    catch(error) {
      message.error(error);
    };

  }
}





  return (
    <>
       


    <div className="Contain">
        <div className="stat">    

          {/* <b>Activity History</b>   */}
      
            <div className="graph">
              <Stat1></Stat1>
              {/* <div className="activity" ><b>your activity for last five days = 12 .34 hours</b></div> */}
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
                        <label htmlFor="firstName">First Name</label>
                        
                      </div>              
                                            
                          
                      <div className="gaps">   
                      <label>lastname</label>
                      </div> 

                      <div className="gaps">   
                           <label>phone number</label>
                           </div>     

                           <div className="gaps">  
                           <label>e-mail address</label>
                           </div> 
                          
                           {/* <div className="gaps">  
                           <label>id</label>
                           </div>    */}

                         

                            
                     </div>

      
                    
                    </div>


                    <div style={{ flex: 2,textAlign:'start'}}>


                    <div className="inputs">
                 
                        
                                      <div className="column">
                                      <TextField id='standard-basic'
                                      error={firstNameError}
                              
                                      value={firstName}
                                      disabled = {isDisabled}
                                      onChange={(e) => {
                                        setfName(e.target.value);
                                        validateFirstName();
                                        
                                      }}
                                   
                                      variant='standard'  />
                                      </div>
                             


                                     <div className="column">
                                      <TextField id='standard-basic'  
                                      error={lastNameError}
                                                                                                         
                                      value={lastName}
                                      disabled = {isDisabled}
                                      onChange={(e)=>setlName(e.target.value)}
                                      variant='standard'  />
                                      </div>
                                     
                                      
                                     
                                      <div className="column">
                                      <TextField id='standard-basic'
                                      error={contactNumberError}

                                     value={contactNumber}
                                     disabled = {isDisabled}
                                     onChange={(e)=>setPhonenum(e.target.value)}
                                     variant='standard'  />
                                      </div>
                                     
                                    

                                    
                                      <div className="column">
                                      <TextField id='standard-basic'
                                       error={emailError}

                                      value={email}
                                      disabled = {isDisabled}
                                      onChange={(e)=>setEmail(e.target.value)}
                                      variant='standard'  />
                                     
                                      </div>
                                    
                                      
                                     
                                      {/* <div className="column">
                                      <TextField id='standard-basic'
                                      error={nicError}

                                     value={nic}
                                     disabled = {isDisabled}
                                     onChange={(e)=>setID(e.target.value)}
                                     variant='standard'  /> */}

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
                          {/* </div> */}

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
