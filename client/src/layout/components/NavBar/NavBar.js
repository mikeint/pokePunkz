import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import './NavBar.scss' 
import logo from '../../files/images/logoLW.png'


const NavBar = () =>
    <div className="topNavContainer"> 
        <NavLink to="/" className="navItem"><img src={logo} alt={"icon"} /></NavLink>
    </div>

export default withRouter((NavBar));