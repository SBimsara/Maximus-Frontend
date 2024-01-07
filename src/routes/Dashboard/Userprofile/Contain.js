import React, { useEffect, useState } from "react";
import "./Contain.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Graph } from "./Graph";
import { Doughnut } from "react-chartjs-2";
import { stat0 } from "../../Statistics/Stat0/Stat0";
import { getDataById } from "../../../services/getDataById";
import { updateData } from "../../../services/updateData";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { TableHead } from "@mui/material";
import Paper from "@mui/material/Paper";
import axios from "axios";

import "antd/dist/antd";
import { message } from "antd";
import Stat1 from "../../Statistics/Stat1/Stat1";

const getURL = "http://localhost:8082/api/v1/admin/getAdminByAdminId/1";
const id = "1";

export default function Contain({ setAdmins, adminCount, userCount }) {
  const [firstName, setfName] = useState("");
  const [lastName, setlName] = useState("");
  const [contactNumber, setPhonenum] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDate] = useState("");
  const [nic, setNIC] = useState("");
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isMainAdmin, setMain] = useState("");
  const [userTableData, setUserTableData] = useState([]);

  // const [nic,setID]=useState('')
  //const [age,setAge]=useState('')

  const [isDisabled, setisDisabled] = useState(true);

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [contactNumberError, setContactNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  // const [nicError, setNICError] = useState(false);

  const [firstNameErrorHelperText, setFirstNameErrorHelperText] = useState("");
  const [lastNameErrorHelperText, setLastNameErrorHelperText] = useState("");

  const [chartData, setChartData] = useState({
    labels: ["Admins", "Users"],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ["#f7941d", "#25bed0"],
      },
    ],
  });

  const validateFirstName = () => {
    const alphabetic = /^[A-Za-z]+$/;

    if (firstName.trim() === "") {
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

    if (lastName.trim() === "") {
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

    if (contactNumber === "") {
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

  

  const validateEmail = () => {
    const valemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
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

  const handleClick = () => {
    setTimeout(() => {
      message.warning("edit admin profile");
    }, 1000);

    setisDisabled(false);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    
    axios
      .get(getURL)
      .then(function (response) {
        console.log(response);
        setfName(response.data.firstname);
        setlName(response.data.lastname);
        setPhonenum(response.data.mobilenum);
        setEmail(response.data.email);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});

    setisDisabled(true);
    setAdmins(3);

    setChartData({
      labels: ["Admins", "Users"],
      datasets: [
        {
          data: [3, userCount],
          backgroundColor: ["#f7941d", "#25bed0"],
        },
      ],
    });

   
  }

  const handleSubmit = async () => {
    const a = validateFirstName();
    const b = validateLastName();
    const c = validateContactNumber();
    const d = validateEmail();
   

    if (a && b && c && d) {
      const userData = {
        id: 1,
        firstname: firstName,
        lastname: lastName,
        mobilenum: contactNumber,
        email,
      };

      axios
        .put("http://localhost:8082/api/v1/admin/updateAdmin", userData)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setisDisabled(true);
        });
    }
  };

  return (
    <>
      <div className="Contain">
       

        <div
          style={{
            marginTop: "50px",
            textAlign: "center",
            maxHeight: "300px",
            marginBottom: "50px",
          }}
        >
          <h2>Admins vs Users</h2>
          <Doughnut data={chartData} />
        </div>

        <div className="profile">
         
          <div className="ProfilePic">
            <img src="./all-image/admins.png" alt="" className="ProfilePic" />
          </div>

          <div className="form">
            <form>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }}>
                  <div className="labels">
                    <div className="gaps">
                      <label htmlFor="firstName">First Name</label>
                    </div>

                    <div className="gaps">
                      <label>Last Name</label>
                    </div>

                    <div className="gaps">
                      <label>Phone Number</label>
                    </div>

                    <div className="gaps">
                      <label>Email</label>
                    </div>

                    {/* <div className="gaps">  
                           <label>id</label>
                           </div>    */}
                  </div>
                </div>

                <div style={{ flex: 2, textAlign: "start" }}>
                  <div className="inputs">
                    <div className="column">
                      <TextField
                        id="standard-basic"
                        error={firstNameError}
                        value={firstName}
                        disabled={isDisabled}
                        onChange={(e) => {
                          setfName(e.target.value);
                          validateFirstName();
                        }}
                        variant="standard"
                      />
                    </div>

                    <div className="column">
                      <TextField
                        id="standard-basic"
                        error={lastNameError}
                        value={lastName}
                        disabled={isDisabled}
                        onChange={(e) => setlName(e.target.value)}
                        variant="standard"
                      />
                    </div>

                    <div className="column">
                      <TextField
                        id="standard-basic"
                        error={contactNumberError}
                        value={contactNumber}
                        disabled={isDisabled}
                        onChange={(e) => setPhonenum(e.target.value)}
                        variant="standard"
                      />
                    </div>

                    <div className="column">
                      <TextField
                        id="standard-basic"
                        error={emailError}
                        value={email}
                        disabled={isDisabled}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="standard"
                      />
                    </div>

                    
                  </div>
                </div>
              </div>
              
            </form>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="div">
              <Button
                variant="contained"
                color="secondary"
                disableElevation
                onClick={handleClick}
                style={{
                  backgroundColor: "#f7941d",
                  color: "white",
                  width: "130px",
                  height: "30px",
                  textSizeAdjust: "10px",
                  display: "flex",
                  flex: "1",
                  textAlign: "center",
                  fontSize: "11px",
                  fontWeight: "bolder",
                  marginTop: "40px",
                  marginLeft: "60px",
                  fontcolor: "black",
                }}
              >
                Edit profile
              </Button>
            </div>

            <div className="div">
              <Button
                variant="contained"
                color="secondary"
                disableElevation
                disabled={isDisabled}
                style={{
                  backgroundColor: "#25bed0",
                  color: "white",
                  width: "130px",
                  height: "30px",
                  textSizeAdjust: "10px",
                  display: "flex",
                  flex: "3",
                  textAlign: "center",
                  fontSize: "11px",
                  fontWeight: "bolder",
                  marginTop: "40px",
                  marginRight: "50px",
                }}
                onClick={handleSubmit}
              >
                Save changes
              </Button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
