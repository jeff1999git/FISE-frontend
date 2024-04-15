import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavbarHome from './NavbarHome'

const Loginpage = () => {
    const [input,setInput]=new useState(
        {
            "user_email":"",
            "user_password":""
        }
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readvalues=()=>{
        console.log(input)
        axios.post("http://localhost:4004/api/users/login",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status==="Success") {
                    // console.log(response.data.userData._id)
                    // sessionStorage.setItem("userid",response.data.userData._id)
                    // navigate("/add")
                    window.location.href = '/UserHome';
                    
                } 
                else if (response.data.status==="incorrect password") {
                    alert("enter correct password")
                }
                else if (response.data.status==="invalid emailID") {
                    alert("invalid emailID")
                }
                else {
                    alert("something went wrong")
                }
            }
        )
    }
  return (
        <center>
        <div style={{ backgroundColor: '#020217', color: 'white' }}>
            <NavbarHome/>
                <div>
                    <div class="login">
                    <div class="card">
                        <div className="container">
                            <div className="row g-3">
                                <div class="card-body">
                                    <h2 class="card-title"><u>LOGIN</u></h2>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
                                        <div className="row g-3">
                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                <label htmlFor="" className="form-label">EMAIL-ID</label>
                                                <input type="text" className="form-control" name="user_email" value={input.user_email} onChange={inputHandler} />
                                            </div>
                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                <label htmlFor="" className="form-label">PASSWORD</label>
                                                <input type="password" className="form-control" name="user_password" value={input.user_password} onChange={inputHandler} />
                                            </div>
                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                <button className="btn btn-primary" onClick={readvalues}>LOGIN</button>
                                            </div>
                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                <center><Link to="/register" className="nav-link">New Users register here</Link></center><br></br>
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
  )
}

export default Loginpage
