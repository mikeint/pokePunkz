
import React, { Component } from "react"
import './Bio.scss'
 
class Bio extends Component {

    render() {    
        return (
            <div className="bioContainer">
                <div className="header">What are PokePunkz?</div>

                The PokePunkz Club is an art project consisting of <span className="bolded">1151</span> randomly generated nfts.
                
                <div className="bioBox">
                    <p><span className="bolded">1000</span> non holographics</p>
                    <p><span className="bolded">151</span> holographics/animated, in honor of the 151 original set.</p> 
                </div>

                52 different types of PokeHats have attached themselves to some punkz heads. Each one built with a python script that choose 
                rarity based on % values of these attributes:<br/><br/>
                <b>Background</b><br/>
                <b>Type</b><br/>
                <b>Pokehat</b><br/><br/>

                Each hat was hand drawn on a 24x24 pixel canvas.
                They are all available within the Ethereum blockchain.
                Each punk was chosen at random to achieve a unique set of 1000 nfts. 
                (151 holographics were made with another python script which were hand picked)
            </div> 
        )
    }
}

export default Bio;



