import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registerpage = () => {
    const navigate=useNavigate()
  const [input, setInput] = new useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_password: "",
    user_gender: "",
  });
  const inputHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const readvalues = () => {
    axios
      .post("http://localhost:4004/api/users/signup", input)
      .then((response) => {
        if (response.data.status === "success") {
            navigate('/')
          alert("Registered successfully");
          setInput({
            user_name: "",
            user_email: "",
            user_phone: "",
            user_password: "",
            user_gender: "",
          });
        } else {
          alert("something went wrong");
        }
      });
  };
  return (
    <center>
        <div class="background">
                <div>
                    <div class="login">
                    <div class="card">
      <div className="container">
        <div className="row">
        <div class="card-body">
        <h2 class="card-title"><u>REGISTER</u></h2><br></br>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="user_name"
                  value={input.user_name}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="user_email"
                  value={input.user_email}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="user_phone"
                  value={input.user_phone}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Gender
                </label>
                <select
                  name="user_gender"
                  id=""
                  className="form-control"
                  value={input.user_gender}
                  onChange={inputHandler}
                >
                  <option value="">select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="user_password"
                  value={input.user_password}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={readvalues}>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </center>
  );
};

export default Registerpage;
