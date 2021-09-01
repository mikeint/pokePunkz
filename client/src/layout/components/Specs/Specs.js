
import React, { Component } from "react"
import './Specs.scss'
import magStrip from '../../files/images/magnemiteStrip.png'

import PokePunkzBox from '../PokePunkzBox/PokePunkzBox'
 
class Specs extends Component {

    render() {    
        return (
            <>
                <div className="specsContainer">
                    <div className="header">What are Specs?</div>
                    <div className="specsText">
                        Each PokePunk hat is designed by hand and generated as 24x24 enlarged to 480x480. Each set of PokePunkz are generated with a random 
                        background and random Punk utilizing 53 different PokeHat options.
                        Each one built with a python script that choose between rarity based on % values of these attributes:<br/><br/>
                        <span className="bolded">Background</span><br/>
                        <span className="bolded">Type</span><br/>
                        <span className="bolded">Pokehat</span><br/>
                    </div>
                </div> 
                <div className="coloursContainer"> 
                    <div className="colourBox cb1">48%</div>
                    <div className="colourBox cb2">20%</div>
                    <div className="colourBox cb3">14%</div>
                    <div className="colourBox cb4">8%</div>
                    <div className="colourBox cb5">5%</div>
                    <div className="colourBox cb6">3%</div>
                    <div className="colourBox cb7">2%</div>
                    <div className="colourBox cb8">1%</div>
                </div> 
                <img src={magStrip} className="magStrip" alt={"magStrip"} /> 

                <div className="specsText">
                    PokePunkz believes in the power of nostalgia! 
                    The 53 Pokemon hats represent them 🤘 In the PokePunkz Club punkverse nobody is judged by their Hat type!
                    All PokePunkz Club members live together peacefully 👊 Each Punk is different from the others and this makes each of them uniquely rare! 
                    There will be a limited supply of 1151 (in honor of the original 151 pokemon), and purchasing an PokePunkz costs <u>0.03</u> ETH detailed below.  
                </div>

                <PokePunkzBox />
            </>
        )
    }
}

export default Specs;



