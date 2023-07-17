import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='h1'>
      <center>
        <h1 style={{color:"orangered"}}>welcome to page</h1>
        <Link to='/register'>register</Link>{"  "}
        <Link to='/Login'>login</Link>
        </center>
        </div>
  )
}

export default Dashboard