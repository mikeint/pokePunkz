
import React, { Component } from "react"
import './Team.scss'
import teamMember from '../../files/images/team1.gif' 
import discord from '../../files/images/socialImages/discord.png'
import twitter from '../../files/images/socialImages/twitter.png'
// import linkedIn from '../../files/images/socialImages/linkedIn.png'
// import website from '../../files/images/socialImages/website.png'
// import pikachu from '../../files/images/socialImages/pikachu.png' 

class Team extends Component {

    render() {
        return (
            <div className="teamContainer">
                <div className="header"></div>
                <img src={teamMember} className="teamMember" alt={"teamMember"} />
                <div className="teamSocials"> 
                    <a href="https://discord.com/channels/875044707871371305/875049993336160306" target="_blank" rel="noreferrer">
                        <button type="submit" name="submit" className="socialBtn">
                            <div className="hover">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <img src={discord} className="socialImage" alt="discord" />
                        </button>
                    </a>
                    <a href="https://twitter.com/PokePunkzNft?s=09" target="_blank" rel="noreferrer">
                        <button type="submit" name="submit" className="socialBtn">
                            <div className="hover">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <img src={twitter} className="socialImage" alt="twitter" />
                        </button> 
                    </a>
                </div>
            </div>
        )
    }
}

export default Team;



