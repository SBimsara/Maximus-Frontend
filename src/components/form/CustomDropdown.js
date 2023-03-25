import axios from 'axios';
import React, {useState,useEffect} from 'react';


const url="http://localhost:8080/api/v1/user/getUsers";

function CustomDropdown({topic}) {
    // const [companyName, setCompanyName] = useState("")
    // const [companyOwner, setCompanyOwner] = useState("")
    // const [ownerAddress, setOwnerAddress] = useState("")
    // const [companyList, setCompanyList] = useState([{'name':'','id':''}])
    const [dataList, setDataList] = useState([]);
    const [dataName, setDataName] = useState("");

    async function dropdownData() {
      const response = await axios.get(url);
      setDataList(response);
    }

    useEffect(() =>{
        // const fetchData = async ()=>{
        //     const response = await fetch("");
        //     const newData = await response.json();
        //     setDataList(newData);
        //     // console.log(newData);
        // };
        dropdownData();
    }, [])

    const handleChange = (event) =>{
        setDataName(event.target.value);
    }


    // const saveBtn = (e) => {
    //     e.preventDefault();
    //     console.log('Company Owner',companyOwner);
    //     console.log('Company Owner Address',ownerAddress);
    //     console.log('Company Name',companyName);

    // }

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4">

           {/* <h2 className="alert alert-warning">Company Owners Details</h2>
           <div className="col-sm-12">
            <label htmlFor="email_address">Company Owner Full Names</label>
            <div className="form-line">
              <input
                type="text"
                id="salt_qty"
                name="salt_qty"
                className="form-control"
                placeholder="Enter Owner Full Names"
                value={companyOwner}
                onChange={e=> setCompanyOwner(e.target.value)}
              />
            </div>
          </div>
          <br />


          <div className="col-sm-12">
            <label htmlFor="email_address">Company Owner Address</label>
            <div className="form-line">
              <input
                type="text"
                id="salt_qty"
                name="salt_qty"
                className="form-control"
                placeholder="Enter Owner Address"
                value={ownerAddress}
                onChange={e=> setOwnerAddress(e.target.value)}
              />
            </div>
          </div> */}
          <br />

          <select className="form-control" value={dataName} onChange={handleChange}>
              <option value="">{topic}</option>

        {dataList.map(data => (
              <option value={data.name} key={data.id} >{data.name}</option>
    
              ))
        }

          </select>

          <br/>
          {/* <button className="btn btn-primary" onClick={saveBtn}>Save</button> */}


                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CustomDropdown;