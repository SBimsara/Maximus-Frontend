import React, { useEffect, useState } from "react";
import "./Dashboard.css";


import Contain from "./Userprofile/Contain";
import Navbar1 from "../../components/Navbar1";
import { getData } from "../../services/getData";

export default function Dashboard() {
  const [adminCount, setAdminCount] = useState();
  const [userCount, setUserCount] = useState(30);

  useEffect(() => {
    async function getAdminCount() {
      const response = await getData(
        "http://localhost:8080/api/v1/admin/getAdminCount"
      );
      setAdminCount(response);
    }
    getAdminCount();
  }, []);

  return (
    <>
      <div className="contaner">
        <>
          <Navbar1 text="DASHBOARD" />
        </>
      </div>
      <div className="dashboard">
        <div className="left">
          <p style={{ fontSize: "18px" }}>Registered Administrators</p>
          <b style={{ fontSize: "30px" }}>{adminCount}</b>
        </div>
        <div className="right">
          <p style={{ fontSize: "18px" }}>Registered Users</p>
          <b style={{ fontSize: "30px" }}>{userCount}</b>
        </div>
      </div>

      <div className="contaner">
        <>
          <Contain
            setAdmins={setAdminCount}
            adminCount={adminCount}
            userCount={userCount}
          />
        </>
      </div>
    </>
  );
}
