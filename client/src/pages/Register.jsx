import React from 'react'
import {Link} from "react-router-dom";

function Register() {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input type="text" placeholder='Username'/>
        <input type="email" placeholder='Email'/>
        <input type="password"  placeholder='Password'/>
        <button>Register</button>
        <p>This is an error</p>
        <span>Do you have an account?<Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register