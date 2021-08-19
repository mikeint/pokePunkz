import React, { Component } from 'react';
import './PokePunkz.scss'

import masterList from '../../files/masterJSON/masterJSON.json';

const pokePunkHats = [
    "Ash Hat",
    "Rocket Hat",
    "Pikachu Hat",
    "Raichu Hat",
    "Bulbasaur Hat",
    "Ivysaur Hat",
    "Venusaur Hat",
    "Charmander Hat",
    "Charmeleon Hat",
    "Charizard Hat",
    "Squirtle Hat",
    "Wartortle Hat",
    "Blastoise Hat",
    "Diglett Hat",
    "Dugtrio Hat",
    "Slowpoke Hat",
    "Slowbro Hat",
    "Exeggcute Hat",
    "Exeggutor Hat",
    "Magnemite Hat",
    "Magneton Hat",
    "Grimer Hat",
    "Muk Hat",
    "Abra Hat",
    "Alakazam Hat",
    "Kadabra Hat", 
    "Tentacool Hat",
    "Tentacruel Hat",
    "Bellsprout Hat",
    "Weepinbell Hat",
    "Staryu Hat",
    "Starmie Hat",
    "Cubone Hat",
    "Geodude Hat",
    "Psyduck Hat",
    "Rattata Hat",
    "Drowzee Hat",
    "Koffing Hat",
    "Jigglypuff Hat",    
    "Magikarp Hat",
    "Poliwag Hat",
    "Gengar Hat",
    "Vileplume Hat",
    "Eevee Hat",
    "Porygon Hat",
    "Magmar Hat",
    "Snorlax Hat",
    "Ditto Hat",
    "Beedrill Hat",
    "Zapdos Hat",
    "Moltres Hat",
    "Articuno Hat",
    "Mew Hat",
]

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
                    <a key={"PokePunk"+i} href="">
                        <img src={require('../../files/masterPNGS/' + image).default} alt={image} />
                    </a>
                ):''
            })
        )
    }

    buildPokeBalls() {
        return pokePunkHats.map((item, key) => {
            return ( 
                <div key={key} className="option faded" onClick={() => this.selectPokePunk(item)} id={"option"+key}>
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
                </div>

                <div className="filterResultsContainer">  
                    {this.showPokePunks()} 
                </div>
            </div>
		)
	}
}

export default PokePunkz