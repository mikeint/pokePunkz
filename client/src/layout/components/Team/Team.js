
import React, { Component } from "react"
import './Team.scss'
import teamMember from '../../files/images/team1.png' 
import discord from '../../files/images/socialImages/discord.png'
import linkedIn from '../../files/images/socialImages/linkedIn.png'
import website from '../../files/images/socialImages/website.png'
import pikachu from '../../files/images/socialImages/pikachu.png'
 
class Team extends Component {

    render() {    
        return (
            <div className="teamContainer">
                <div className="header">Team</div>
                <img src={teamMember} className="teamMember" alt={"teamMember"} /> 
                <div className="">Michael Sansone</div>
                <div className="teamSocials">
                    <a href="https://www.linkedin.com/in/michael-sansone/" target="_blank" rel="noreferrer">
                        <button type="submit" name="submit" className="socialBtn">
                            <div className="hover">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <img src={linkedIn} className="socialImage" alt="linkedIn" />
                        </button> 
                    </a>
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
                    <a href="https://sansonem-pokemon.s3.ca-central-1.amazonaws.com/index.html" target="_blank" rel="noreferrer">
                        <button type="submit" name="submit" className="socialBtn">
                            <div className="hover">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <img src={pikachu} className="socialImage" alt="pikachu" />
                        </button> 
                    </a>
                    <a href="http://onlysansone.ca/#/" target="_blank" rel="noreferrer">
                        <button type="submit" name="submit" className="socialBtn">
                            <div className="hover">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        <img src={website} className="socialImage" alt="website" />
                        </button>
                    </a>
                </div>
            </div>
        )
    }
}

export default Team;



