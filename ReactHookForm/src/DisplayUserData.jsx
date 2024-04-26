import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";

function DisplayUserData() {
  const location = useLocation(); // it is used to get the data from the component
  const navigate = useNavigate();
  console.log(location);
  let userData = location.state?.formData;
  console.log(userData);

  const handleConfirm = () => {
    userData = {};
    console.log(userData);
    navigate("/");
  };

  return (
    <div className="data-container">
      <h1>Your Information: Review and Confirm</h1>
      {userData ? (
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{userData.username}</td>
                <td>{userData.email}</td>
                <td>{userData.password}</td>
                <td>{userData.PhoneNumber}</td>
              </tr>
            </tbody>
           </table>
          <button onClick={handleConfirm} className="confirm-btn">Confirm</button>
        </div>
      ) : (
        <p>No form data available.</p>
      )}
    </div>
  );
}

export default DisplayUserData;
