
import React, { Component } from "react"
import './Specs.scss'
import magStrip from '../../files/images/magnemiteStrip.png'

import stamp from '../../files/images/examples/1st.png'
import stats from '../../files/images/examples/stats.png'
import head from '../../files/images/examples/head.png'

class Specs extends Component {

    render() {    
        return (
            <>
                <div className="specsContainer">
                    <div className="header">What are Specs?</div>
                    <div className="specsText">
                        Each PokePunk was minted on ERC721, you can rest assure that these NFTS are going to be fun to own. 
                        Each hat is designed by hand and generated as 24x24 enlarged to 480x480. Each set of PokePunkz are generated with a random 
                        background and random Punk utilizing 53 different PokeHat options.
                        Each one built with a python script that choose between rarity based on a % of the following attributes:<br/><br/>
                        {/* <span className="bolded">Background</span><br/>
                        <span className="bolded">Type</span><br/>
                        <span className="bolded">Pokehat</span><br/> */}
                    </div>
                </div> 
                <div className="coloursContainer"> 
                    <div className="colourBox cb1" data-aos="fade-right">48%</div>
                    <div className="colourBox cb2" data-aos="fade-right" data-aos-delay="100">20%</div>
                    <div className="colourBox cb3" data-aos="fade-right" data-aos-delay="200">14%</div>
                    <div className="colourBox cb4" data-aos="fade-right" data-aos-delay="300">8%</div>
                    <div className="colourBox cb5" data-aos="fade-right" data-aos-delay="400">5%</div>
                    <div className="colourBox cb6" data-aos="fade-right" data-aos-delay="500">3%</div>
                    <div className="colourBox cb7" data-aos="fade-right" data-aos-delay="600">2%</div>
                    <div className="colourBox cb8" data-aos="fade-right" data-aos-delay="700">1%</div>
                </div> 
                <img src={magStrip} className="magStrip" alt={"magStrip"} /> 

                <div className="specsContainer">
                    PokePunkz believes in the power of nostalgia! 
                    The 53 Pokemon hats represent them. In the PokePunkz Club punkverse nobody is judged by their Hat type!
                    All PokePunkz Club members live together peacefully. Each Punk is different from the others and making each of them uniquely rare! 
                    There will be a limited supply of 1151 (in honour of the original 151 Pokémon), and purchasing a PokePunk Pack costs <u>0.05</u> ETH.

                    <div className="statsContainer">
                        <div className="statsTitle">Bulbasaur</div>
                        <div data-aos="flip-up">
                            <img className="bulbaHead"src={head} alt={"head"} />
                        </div>
                        <div data-aos="flip-down">
                            <img className="bulbaStats"src={stats} alt={"stats"} />
                        </div>
                        <div className="mintText">Once minted, a random PokePunk from is chosen, then assigned random stats. These stats will be used for games where you can earn PokeCoins.
                        First <b><u>200</u></b> packs will be stamped as first edition. <img className="stamp" src={stamp} alt={"stamp"} /></div>
                    </div>
                </div>

            </>
        )
    }
}

export default Specs;
