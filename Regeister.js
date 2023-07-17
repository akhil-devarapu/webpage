import React, { useState } from 'react';
import "./App.css";
import { Link } from 'react-router-dom';

const Regeister = () => {
    const [data,setdata]=useState({
        FirstName : " ",
        LastName :" ",
        Email : " ",
        Password : " ",
        PhoneNumber:" "

    })
    const  ChangeHandler=(e)=> {
        setdata({...data,[e.target.name]:e.target.value})

    } 
    const submitHandler=(e)=>{
        e.preventDefault();
        fetch("https://registration-and-login-32514-default-rtdb.firebaseio.com/data.json",
        {
            method:'Post',
            body:JSON.stringify(data)
        }).then(res=>alert("data posted")).catch(err=>console.log(err))

    }
  return (
    <div className='h1'>
        <h2 style={{color:"red",backgroundColor:"white"}}>REGISTRATION FORM</h2><br />
        <form onSubmit={submitHandler} style={{color:"blue"}}>
                <label>FirstName:</label>
                <input type="text" name="FirstName" onChange={ChangeHandler} /><br/>
                <label>Last Name:</label>
                <input type="text" name="LastName" onChange={ChangeHandler} /><br />
                <label>Email:</label>
                <input type="email" name="Email" onChange={ChangeHandler} /><br />
                <label>Password:</label>
                <input type="Password" name="Password" onChange={ChangeHandler} /><br />
                <label>Phone Number:</label>
                <input type="text" name="PhoneNumber" onChange={ChangeHandler} /><br />
                <input type="submit" value="signup" />
         </form>
         <Link to="/">Back to Dashboard</Link>
    </div>
  )
}

export default Regeister