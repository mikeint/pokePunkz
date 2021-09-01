
import React, { Component } from "react"
import './WhyBuy.scss'
 
class WhyBuy extends Component {

    render() {    
        return (
            <div className="whyBuyContainer">
                <div className="header">Why join the PokePunkz Club?</div>
                <div className="paragraph">
                    Think of NFTs as the Pokemon Trading Card Game for anyone who loves collecting. NFTs are currently trending. Now is the time to join the community!
                    NFTs fundamentally changed how people can collect and trade art.<br/><br/>

                    <span className="bolded">ROADMAP:</span> 1000 original baseset nfts will drop in increments of 100. 
                    Each increment of 100 will include a few animated versions of some baseset PokePunkz.<br/>
                    <u><b>For every 10 sold, a random holographic will be auctioned.</b></u><br/>
                    this means, there will be 151 holos auctioned.<br/><br/>

                    As for why PokePunkz Club? Well, maybe you want a PokePunk NFT because you're craving that nostalgia normal life cant supply anymore.  
                    Or maybe you want a PokePunk to match who you are. But mostly PokePunkz are very rare, so beautifully designed that you can't go wrong.  
                    PokePunkz Art will never go out of style. It is in the eyes of the beholder, and you know you want to bring out that 90s kid in you.  
                    Join the PokePunk Club while its still early! 
                </div>
            </div> 
        )
    }
}

export default WhyBuy;