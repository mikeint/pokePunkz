import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import './NavBar.scss' 
import logo from '../../files/images/logoLW.png'

const NavBar = () =>
    <div className="topNavContainer"> 
        <NavLink to="/" className="navItem"><img src={logo} alt={"icon"} /></NavLink>
        <div className="openSeaContainer">  
            <a href="https://opensea.io/collection/pokepunkz" 
                className="openseaBtn mainButton" 
                target="_blank" 
                rel="noreferrer"
                data-aos="zoom-in-down" data-aos-delay="100"
            > 
                <div className="hover">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                BUY ON OPENSEA
            </a> 
        </div> 
    </div>

export default withRouter((NavBar));