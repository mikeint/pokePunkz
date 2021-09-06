import React from "react"
import './TopButtons.scss'
import { Link } from "react-router-dom" 

const TopButtons = () => 
    <div className="topButtonsContainer">
        <div className="LogoContainer" data-aos="fade-down" data-aos-duration="800"></div>
        <Link to="/pokePunkz" className="mainButton" data-aos="zoom-in" data-aos-duration="800"> 
                <div className="hover">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            POKEPUNKZ 
        </Link>
    </div> 

export default TopButtons;



