import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../cssfile/SignUp.css";

import healthdataService from "../Service/healthdata.service";

const HealthData = ({ loginId }) => {
  const [User, setUser] = useState({
    steps: "",
    heartRate: "",
    bloodPressure: "",
    date: "",
    user: loginId,
  });

  console.log("User:", User);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const [message, setMessage] = useState("");
  const [healths, setHealths] = useState([]);

  useEffect(() => {
    const loginId = localStorage.getItem("loginId");

    setUser((prevUser) => ({
      ...prevUser,
      user: loginId || "",
    }));

    healthdataService.getHealthList(loginId).then((res) => {
      if (res.data.length === 0) {
        setMessage("Sorry !!! No Updates !!!");
        setHealths([]);
      } else {
        setHealths(res.data);
      }
    });
  }, []);

  const submitUser = (e) => {
    e.preventDefault();
    setUser({
      steps: "",
      heartRate: "",
      bloodPressure: "",
      date: "",
      user: loginId,
    });

    healthdataService.saveHealth(User).then((res) => {
      setMessage("HealthData Updated");
    });
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={(e) => submitUser(e)}>
          {message && <p className="text-success">{message}</p>}
          <div className="form-group">
            <label htmlFor="name">Steps:</label>
            <input
              type="text"
              id="steps"
              name="steps"
              value={User.steps}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">HeartRate:</label>
            <input
              type="text"
              id="heartRate"
              name="heartRate"
              value={User.heartRate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="defficultyLevel">BloodPressure:</label>
            <input
              type="text"
              id="bloodPressure"
              name="bloodPressure"
              value={User.bloodPressure}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="defficultyLevel">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={User.date}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="tour-details-container">
        {healths.length > 0 ? (
          healths.map((health, index) => (
            <div className="tour-details-box" key={index}>
              <div className="tour-item">
                <div>
                  <p className="label">Steps:</p>
                  <p className="value">{health.steps}</p>
                  <hr></hr>
                  <p className="label">HeartRate:</p>
                  <p className="value">{health.heartRate}</p>
                </div>
                <div>
                  <p className="label">Blood Pressure:</p>
                  <p className="value">{health.bloodPressure}</p>
                  <hr></hr>
                  <p className="label">Date:</p>
                  <p className="value">{health.date}</p>
                </div>
              </div>
              {index % 2 !== 0 && <div className="tour-separator"></div>}
            </div>
          ))
        ) : (
          <p>No health data available.</p>
        )}
      </div>
    </div>
  );
};

export default HealthData;
