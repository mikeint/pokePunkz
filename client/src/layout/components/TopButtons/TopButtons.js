import React from "react"
import './TopButtons.scss'
import { Link } from "react-router-dom" 

const TopButtons = () => 
    <div className="topButtonsContainer">
        <div className="LogoContainer"></div>
        <button type="submit" name="submit" className="btn">
            <div className="hover">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <Link to="/pokePunkz" className="seeCollectionBtn">POKEPUNKZ</Link>
        </button>
    </div> 

export default TopButtons;



