import React from "react"
import './Socials.scss' 

import discord from '../../files/images/socialImages/discord.png'
//import instagram from '../../files/images/socialImages/instagram.png'
import twitter from '../../files/images/socialImages/twitter.png'

const Socials = () => 
    <div className="socialsContainer">

        <a href="https://discord.gg/kEy6uB6C3H" target="_blank" rel="noreferrer">
            <button type="submit" name="submit" className="socialBtn">
                <div className="hover">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <img src={discord} alt="discord" />
            </button>
        </a>
        {/* <a href="https://www.instagram.com/pokepunkz/" target="_blank" rel="noreferrer">
            <button type="submit" name="submit" className="socialBtn">
                <div className="hover">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            <img src={instagram} alt="instagram" />
            </button>
        </a> */}
        <a href="https://twitter.com/PokePunkzNft?s=09" target="_blank" rel="noreferrer">
            <button type="submit" name="submit" className="socialBtn">
                <div className="hover">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <img src={twitter} alt="twitter" />
            </button> 
        </a>
    </div>

export default Socials;



