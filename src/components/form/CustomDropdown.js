import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { getData } from '../../services/getData';

import "./styles/CustomDropdown.styles.css";

//const url="http://localhost:8080/api/v1/user/getUsers";

function CustomDropdown({ topic, url , onSelect }) {

  const [dataList, setDataList] = useState([]);
  const [dataName, setDataName] = useState("");

  async function dropdownData() {
    const response = await getData(url);
    setDataList(response);
    console.log(response);
    console.log(dataList);
  }

  useEffect(() => {
    
    dropdownData();
  }, [])

  const handleChange = (event) => {
    const selectedData = dataList.find((data) => data.subjectname === event.target.value);
    setDataName(event.target.value);
    // console.log(dataName);
    onSelect(selectedData);
  }



  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">

            
            <br />

            <select className="form-control" value={dataName} onChange={handleChange}>
              <option value="">{topic}</option>

              {dataList.map(data => (
                <option value={data.subjectname} key={data.id} >{data.subjectname}</option>

              ))
              }

            </select>

            <br />
            


          </div>
        </div>
      </div>

    </div>
  )
}

export default CustomDropdown;