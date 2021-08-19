import React from "react"
import './TopButtons.scss'
import { Link } from "react-router-dom" 

const TopButtons = () => 
    <div className="topButtonsContainer">
        <div className="LogoContainer"></div>
        <Link to="/pokePunkz" className="topBtn"> 
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



