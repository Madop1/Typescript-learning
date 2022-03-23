import React, { useState } from "react";
import loginImg from "./login.svg";
import "./style.scss";
export default function Register() {

  const [data,setData]= useState({
    username:"",
    email:"",
    password:""
  })
  const [disable,setDisable] = useState(true)
 
 const  submitHandler = () => {
  console.log("clicked")
  setDisable(true) 
  localStorage.getItem("users");
  let arr = localStorage.getItem("users");  
  if (arr == null) {    
    localStorage.setItem("users", JSON.stringify([data]));    
  } else {
    let userdata = JSON.parse(arr);    
    userdata.push(data)
    localStorage.setItem("users", JSON.stringify(userdata));        
  }
  setData({
    username:"",
    email:"",
    password:""
  })


 }
 const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
   setData({...data,[e.target.name]: e.target.value});
   if(data.username.length > 0 && data.email.length > 0 && data.password.length > 0 ) {     
    setDisable(false)  
   }
 }



  return (
    <form>
      <div className="base-container">
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username </label>
              <input
              data-testid="username"
                type="text"
                name="username"
                placeholder="Username"
                value={data.username}
                onChange={changeHandler}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="username">Email </label>
              <input
              data-testid="mail"
                type="mail"
                name="email"
                placeholder="Email"
                value={data.email}
                onChange={changeHandler}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password </label>
              <input 
                data-testid="pass"
                type="password"
                name="password"
                placeholder="Password"
                value={data.password}
                onChange={changeHandler}
              ></input>
            </div>
          </div>
        </div>
        <div>
          {/* {console.log("disable",disable)} */}
          <button data-testid="btn" disabled={disable} type="button" className="btn" onClick={()=> submitHandler()} >
            Register
          </button>
        </div>
      </div>
    </form>
  );
}
