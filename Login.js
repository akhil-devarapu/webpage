import React,{useState}from 'react'
import "./App.css";
import { Link } from 'react-router-dom';

const Login = () =>{
    const[data,setdata]=useState(
        {
            Email:" ",
            Password:" "
        }
    )
  return (
    <div className='h1'>
        <form style={{color:"green"}}>
            <lable>Email</lable><br />
            <input type="email" name="Email" ></input><br />
            <lable>Password</lable><br />
            <input type="password" name="Password" /><br />
            <input type="submit" value ="Login" />

        </form>
        <Link to="/">Back to Dashboard</Link>
    </div>
  )
}
  

export default Login