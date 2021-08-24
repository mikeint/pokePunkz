
import React, { Component } from "react"
import './Bio.scss'
 
class Bio extends Component {

    render() {    
        return (
            <div className="bioContainer">
                <div className="header">What are PokePunkz?</div>
                The PokePunkz Club is an art project consisting of 1151 randomly generated nfts. 1000 non holographic, 151 holographics, in honor of the 151 original set.
                There are 52 differently styled poke hats that have attached themselves to some punkz heads. Each hat was drawn on a 24x24 pixel canvas along with a punk.
                A python script choose the rarity based on % values of these attributes:<br/><br/>
                <b>Background colour</b><br/>
                <b>Type</b><br/>
                <b>Pokehat</b><br/><br/>
                they are algorithmically generated on the Ethereum blockchain.
                Each punk was chosen at random to achieve a unique set of 1000 nfts. (151 holographics were made with another python script which choose at 151 PokePunkz at random)
                <br/><br/>
                An initial drop of 200, first evolutions, will b posted. Purchasers of 1 or more of these will be the founders of this project. Founders will have access rare drops along with owners of PokePunkz with 3 evolutions
                They live among themselves in Johto city and the Kanto Sevii Islands. We have PokePunkz dedicated to the Pokemon you love. 
                This project is not affiliated with Larva Labs.
                Special thanks to Cutch and Colin for being such an inspiration along the way!
            </div> 
        )
    }
}

export default Bio;



