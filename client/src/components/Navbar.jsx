import React from 'react'
import Logo from "../img/logo.png"
import{Link} from "react-router-dom";


function Navbar() {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="links">
          <Link to="/?cat=Movies" className='link'><h3>Movies</h3></Link>
          <Link to="/?cat=Movies" className='link'><h3>Movies</h3></Link>
          <Link to="/?cat=Movies" className='link'><h3>Movies</h3></Link>
          <Link to="/?cat=Movies" className='link'><h3>Movies</h3></Link>
          <span className='link'>Rajat Sharma</span>
          <span className='link'>Logout</span>
          <span className='write'><Link to="/write">Write</Link></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar