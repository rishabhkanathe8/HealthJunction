import React, { useState,useEffect } from "react";
import "../cssfile/SignUp.css";

import medicineService from "../Service/medicine.service";

const Medicine = ({ loginId }) => {
  const [User, setUser] = useState({
    name: "",
    dosage: "",
    reminders: "",
    schedule:"",
    user: loginId,
  });

  console.log("User:", User);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const [message, setMessage] = useState("");
  const[medicine,setMedicine] = useState([]);

  useEffect(() => {
    const loginId = localStorage.getItem("loginId");
    
    setUser((prevUser) => ({
      ...prevUser,
      user: loginId || "",
    }));

    medicineService.getMedicine(loginId).then((res)=>{
    if(res.data.length===0){
      setMessage("No Medicine")
      setMedicine([]);
    }else{
      setMedicine(res.data);
    }
    })

  }, []);

  

  const submitUser = (e) => {
    e.preventDefault();
    setUser({
      name: "",
      dosage: "",
      reminders: "",
      schedule:"",
      user: loginId,
    });

    medicineService.saveHealth(User).then((res) => {
      setMessage("Medicine Saved Successfully!!!!");
    });
  };

  return (
    <div>
    <div className="form-container">
      <form onSubmit={(e) => submitUser(e)}>
        {message && <p className="text-success">{message}</p>}
        <div className="form-group">
          <label htmlFor="name">Medicine Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={User.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dosage">Dosage:</label>
          <input
            type="text"
            id="dosage"
            name="dosage"
            value={User.dosage}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="reminders">Reminders:</label>
          <input
            type="text"
            id="reminders"
            name="reminders"
            value={User.reminders}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="schedule">Schedule:</label>
          <input
            type="text"
            id="schedule"
            name="schedule"
            value={User.schedule}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
    <div className="tour-details-container">
        {medicine.length > 0 ? (
          medicine.map((medicines, index) => (
            <div className="tour-details-box" key={index}>
              <div className="tour-item">
                <div>
                  <p className="label">Medicines Name:</p>
                  <p className="value">{medicines.name}</p>
                  <hr></hr>
                  <p className="label">Dosage:</p>
                  <p className="value">{medicines.dosage}</p>
                </div>
                <div>
                  <p className="label">Schedule:</p>
                  <p className="value">{medicines.schedule}</p>
                  <hr></hr>
                  <p className="label">Reminders:</p>
                  <p className="value">{medicines.reminders}</p>
                 
                </div>
              </div>
              {index % 2 !== 0 && <div className="tour-separator"></div>}
            </div>
          ))
        ) : (
          <p>No Medicines Required.</p>
        )}
      </div>
    

    </div>
  );
};

export default Medicine;
