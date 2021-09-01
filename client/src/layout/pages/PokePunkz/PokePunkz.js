import React, { Component } from 'react';
import './PokePunkz.scss'

import masterList from '../../files/masterJSON/masterJSON.json';

const pokePunkHats = [
    "Ash Hat",
    "Rocket Hat",
    "Pikachu Hat",
    "Squirtle Hat",
    "Bulbasaur Hat",
    "Charmander Hat",
    "Diglett Hat",
    "Slowpoke Hat",
    "Grimer Hat",
    "Tentacool Hat",
    "Abra Hat",
    "Magnemite Hat",
    "Exeggcute Hat",
    "Bellsprout Hat",
    "Staryu Hat",
    "Cubone Hat",
    "Geodude Hat",
    "Psyduck Hat",
    "Poliwag Hat",
    "Rattata Hat",
    "Eevee Hat",
    "Drowzee Hat",
    "Jigglypuff Hat",
    "Koffing Hat", 
    "Magikarp Hat",
    "Gengar Hat",   
    "Ditto Hat",
    "Porygon Hat",
    "Magmar Hat",
]
// const pokePunkHats = [
//     "Raichu Hat",
//     "Ivysaur Hat",
//     "Venusaur Hat",
//     "Charmeleon Hat",
//     "Charizard Hat",
//     "Wartortle Hat",
//     "Blastoise Hat",
//     "Dugtrio Hat",
//     "Exeggutor Hat",
//     "Magneton Hat",
//     "Muk Hat",
//     "Kadabra Hat", 
//     "Alakazam Hat",
//     "Tentacruel Hat",
//     "Weepinbell Hat",
//     "Starmie Hat",
//     "Vileplume Hat",
//     "Snorlax Hat",
//     "Beedrill Hat",
//     "Zapdos Hat",
//     "Moltres Hat",
//     "Articuno Hat",
//     "Mew Hat",
// ]

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
        var elems = document.querySelectorAll(".pokeball");  
        [].forEach.call(elems, function(el) {
            el.classList.remove("selected");
        });
    }

    showPokePunks = () => {
        const { pokePunk } = this.state;
        return (
            masterList.map(({image, url, attributes}, i)=> {
                return attributes[0].value===pokePunk || pokePunk==='' ? ( 
                        <img src={require('../../files/masterPNGS/' + image).default} key={i} alt={image} /> 
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
                    {this.showPokePunks()} 
                </div>
            </div>
		)
	}
}

export default PokePunkz