import React from 'react'
import Logo from "../img/logo.png"

function Footer() {
  return (
    <footer>
      <img src={Logo} alt='' />
      <span>
        Made with Love and <b>React.js</b>
      </span>
    </footer>
  )
}

export default Footer