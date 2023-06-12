import React, { useState, useEffect } from "react";
import "../cssfile/SignUp.css";
import exerciseService from "../Service/exercises.service";

const Exercises = ({ loginId }) => {
  const [User, setUser] = useState({
    name: "",
    description: "",
    defficultyLevel: "",
    loginId: loginId,
  });

  console.log("User:", User);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const [message, setMessage] = useState("");
  const[exercises,setExercises]=useState([]);

  useEffect(() => {
    const loginId = localStorage.getItem("loginId");
    console.log("loginId: is     kkk", loginId);
    setUser((prevUser) => ({
      ...prevUser,
      loginId: loginId || "",
    }));

    exerciseService.getExercise(loginId).then((res)=>{

      if(res.data.length===0){
        setMessage("No Exercise");
        setExercises([]);
      }else{
        setExercises(res.data);
      }
    });

  }, []);

  const submitUser = (e) => {
    e.preventDefault();
    setUser({
      name: "",
      description: "",
      defficultyLevel: "",
      loginId: loginId,
    });

    exerciseService.saveExercise(User).then((res) => {
      setMessage("Exercise Updated");
    });
  };

  return (
    <div>
    <div className="form-container">
      <form onSubmit={(e) => submitUser(e)}>
        {message && <p className="text-success">{message}</p>}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={User.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={User.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="defficultyLevel">Difficulty Level:</label>
          <input
            type="text"
            id="defficultyLevel"
            name="defficultyLevel"
            value={User.defficultyLevel}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
    <div className="tour-details-container">
        {exercises.length > 0 ? (
          exercises.map((exercise, index) => (
            <div className="tour-details-box" key={index}>
              <div className="tour-item">
                <div>
                  <p className="label">Exercise Name:</p>
                  <p className="value">{exercise.name}</p>
                  <hr></hr>
                  <p className="label">Description:</p>
                  <p className="value">{exercise.description}</p>
                </div>
                <div>
                  <p className="label">Defficulty Level:</p>
                  <p className="value">{exercise.defficultyLevel}</p>
                 
                </div>
              </div>
              {index % 2 !== 0 && <div className="tour-separator"></div>}
            </div>
          ))
        ) : (
          <p>No Exercise ! Take Rest.</p>
        )}
      </div>
    </div>
  );
};

export default Exercises;
