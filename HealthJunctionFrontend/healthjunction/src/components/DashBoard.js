
import React from "react";
import "../cssfile/DashBoard.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const DashBoard = () => {
  const location = useLocation();
  const user = location.state && location.state.user;

  const navigateToExercise = () => {
    localStorage.setItem("loginId", user.loginId);
  };
  const navigateToHealthData = () => {
    localStorage.setItem("loginId", user.loginId);
  };
  const navigateToMedicineDetail = () => {
    localStorage.setItem("loginId", user.loginId);
  };


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-box1">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to = {{pathname:"/exercises",state:{user:user},}}onClick={navigateToExercise}
                
                  >
                    Exercises
                    
                  </Link>
                </div>
                 
                <div className="nav-box1">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to = {{pathname:"/healthdata",state:{user:user},}}onClick={navigateToHealthData}
                  >
                    HealthData
                  </Link>
                </div>
              </li>
            </ul>
            <h2 className="navbar-heading1">
              Welcome {user.firstName} {user.lastName}
            </h2>
            <div className="navbar-nav ml-auto">
              <div className="nav-box1">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to = {{pathname:"/medicinedetails",state:{user:user},}}onClick={navigateToMedicineDetail}
                >
                  MedicineDetails
                </Link>
              </div>
              <div className="nav-box1">
                <Link className="nav-link active" aria-current="page" to="/">
                  LogOut
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashBoard;
