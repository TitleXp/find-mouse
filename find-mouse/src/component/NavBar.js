import React from 'react'
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'



const NavBar = () => {
  return (
    <div>
      Welcome User

      <NavLink to="/home">home</NavLink>
      <NavLink to="/login">Login</NavLink>

    </div>
  )
}

export default NavBar