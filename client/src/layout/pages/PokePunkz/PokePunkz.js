import React, { Component } from 'react'
import './PokePunkz.scss'

import masterList from '../../files/masterJSON.json'
import BuildPokePunkBox from '../../components/BuildPokePunkBox/BuildPokePunkBox'

const pokePunkHats = [
    "ASH",
    "ROCKET",
    "PIKACHU",
    "SQUIRTLE",
    "BULBASAUR",
    "CHARMANDER",
    "DIGLETT",
    "SLOWPOKE",
    "GRIMER",
    "TENTACOOL",
    "ABRA",
    "MAGNEMITE",
    "EXEGGCUTE",
    "BELLSPROUT",
    "STARYU",
    "CUBONE",
    "GEODUDE",
    "PSYDUCK",
    "POLIWAG",
    "RATTATA",
    "EEVEE",
    "DROWZEE",
    "JIGGLYPUFF",
    "KOFFING", 
    "MAGIKARP",
    "DITTO",
    "PORYGON",
    "MAGMAR",
    "ELECTRODE",
    "DRATINI",
    "DRAGONITE",
    "SCYTHER"
]
//     "RAICHU",
//     "IVYSAUR",
//     "VENUSAUR",
//     "CHARMELEON",
//     "CHARIZARD",
//     "WARTORTLE",
//     "BLASTOISE",
//     "DUGTRIO",
//     "EXEGGUTOR",
//     "MAGNETON",
//     "MUK",
//     "KADABRA", 
//     "ALAKAZAM",
//     "TENTACRUEL",
//     "WEEPINBELL",
//     "STARMIE",
//     "VILEPLUME",
//     "GENGAR",   
//     "SNORLAX",
//     "BEEDRILL",
//     "ZAPDOS",
//     "MOLTRES",
//     "ARTICUNO",
//     "MEW", 

var options = []
var i = 0
while(i < pokePunkHats.length){
    options.push("option"+i);
    i++;
}

class PokePunkz extends Component {
    constructor(props) {
        super(props);
        this.state={
            pokePunk: '',
        }
    }
    componentDidMount() {
        let pokeball="";
        options.forEach(option => {
            document.getElementById(option).addEventListener("click", function() {
                const pokeballs = document.getElementsByClassName("pokeball");
                for (var i = 0; i < pokeballs.length; i++) {
                        pokeball = pokeballs[i];
                    if (pokeball.parentNode.id !== option) {
                        pokeball.classList.remove("selected");
                        pokeball.parentNode.classList.add("faded");
                    } else {
                        pokeball.classList.add("selected");
                        pokeball.parentNode.classList.remove("faded");
                    }
                }
            });
        }); 
    }

    selectPokePunk = (pokePunk) => {
        this.setState({pokePunk}); 
    }
    reset = () => {
        this.setState({pokePunk:''}); 
        var pb = document.querySelectorAll(".pokeball");  
        [].forEach.call(pb, function(el) {
            el.classList.remove("selected");
        });
        var op = document.querySelectorAll(".option");  
        [].forEach.call(op, function(el) {
            el.classList.add("faded");
        });  
    }

    showPokePunkz = () => {
        const { pokePunk } = this.state;
        return (
            masterList.map(({name, image, external_url, attributes}, i)=> {
                return name.indexOf("PokePack") === -1 && (attributes[0].value===pokePunk || pokePunk==='') ? (
                    <BuildPokePunkBox
                        key={i}
                        image={image} 
                        external_url={external_url} 
                        attributes={attributes}
                    />
                ):''
            })
        )
    }

    buildPokeBalls() {
        return pokePunkHats.map((item, key) => {
            return ( 
                <div key={key} className="option faded mainButton" onClick={() => this.selectPokePunk(item)} id={"option"+key}> 
                    <div className="hover">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div> 

                    <div className="pokeball unselected">
                    <div className="upper-half"> </div>
                    <div className="lower-half"> </div>
                    <div className="base"> </div>
                    <div className="inner-circle"> </div>
                    <div className="indicator visible"> </div>
                    <div className="indicator-inner"> </div>
                    </div>
                        {item}
                </div>
            );
        });  
    }

	render() {
		return (
            <div className="filterContainer">
                <div className="filterSelections scrollBar">
                    <div className="resetFilterBtn" onClick={this.reset}>reset</div>
                    {this.buildPokeBalls()}
                    <span className="moreToCome">MORE TO COME</span>
                </div>

                <div className="filterResultsContainer">  
                   {this.showPokePunkz()}
                    <div className="tempComingSoon">POPULATES AS PACKS OPEN</div>
                </div>
            </div>
		)
	}
}

export default PokePunkz