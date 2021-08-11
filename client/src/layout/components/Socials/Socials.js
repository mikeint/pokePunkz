import React from "react"
import './Socials.scss' 

import discord from '../../files/images/socialImages/discord.png'
import instagram from '../../files/images/socialImages/instagram.png'
import twitter from '../../files/images/socialImages/twitter.png'

const Socials = () => 
    <div className="socialsContainer">

        <button type="submit" name="submit" className="socialBtn">
            <div className="hover">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <a href="https://discord.com/channels/865443747704995861/867307462859817001" target="_blank" rel="noreferrer"><img src={discord} alt="discord" /></a>
        </button>
 
        <button type="submit" name="submit" className="socialBtn">
            <div className="hover">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <a href="https://www.instagram.com/nfterrestrials" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram" /></a>
        </button>
 
        <button type="submit" name="submit" className="socialBtn">
            <div className="hover">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <a href="https://twitter.com/nfterrestrials" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter" /></a>
        </button> 
    </div> 

export default Socials;



