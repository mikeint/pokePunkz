
import React, { Component } from "react"
import './Bio.scss'
import bi1 from '../../files/images/sets/1.gif'
import bi2 from '../../files/images/sets/2.png'
import bi3 from '../../files/images/sets/3.gif' 

class Bio extends Component {

    render() {    
        return (
            <div className="bioContainer">
                <div className="header">What are PokePunkz?</div>

                <div className="bioText">
                    The PokePunkz Club is an art project consisting of <span className="bolded">1151</span> randomly generated nfts.
                </div>
                
                <div className="bioBoxContainer">
                    <div className="bioBox">
                        <div className="bioBoxValue" data-aos="fade-right"> 
                            <div><span className="bolded">1000<br /></span> Non-Holographics</div>
                        </div>
                        <div className="bioBoxImages" data-aos="fade-left">
                            <img src={bi2} alt={"bi2"} /> 
                        </div>
                    </div>

                    <div className="bioBox">
                        <div className="bioBoxValue" data-aos="fade-left"> 
                            <div><span className="bolded">151/1000<br /></span> Non-Holographics <br/>(151 Animated)</div>
                        </div>
                        <div className="bioBoxImages" data-aos="fade-right"> 
                            <img src={bi1} alt={"bi1"} /> 
                        </div>
                    </div>

                    <div className="bioBox">
                        <div className="bioBoxValue" data-aos="fade-right"> 
                            <div><span className="bolded">151<br /></span> Holographics <br/>(50 animated)</div> 
                        </div>
                        <div className="bioBoxImages" data-aos="fade-left"> 
                            <img src={bi3} alt={"bi3"} />
                        </div>
                    </div>
                </div>
 

                <div className="bioText">
                    Each hat was hand drawn on a 24x24 pixel canvas then scaled to 480x480 pixels.
                    They are all available within the Ethereum blockchain.
                    Each punk was chosen at random to achieve a unique set of 1000 nfts. 
                    (151 holographics were made with another python script which were hand picked)
                </div>
            </div> 
        )
    }
}

export default Bio;



